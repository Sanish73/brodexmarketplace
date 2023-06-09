const ProductState = {
    pListingWaiting : false,
    pListingMessage : '',
    pListingData    : [],
    pListingFailed  : false,
    pListingPage    : {
      last_page    : 2,
      current_page : 1,
      from         : 1,
      total        : 10
    },
    pListingcurrency : {
      currency_position : "left",
      currency_name     : "USD",
      currency_icon     : "$"
    },
    pListingEnds : false
};
  
  export const useProductListingReducer = (state = ProductState, action) => {
    switch (action.type) {
      case 'LIST_PRODUCT_WAITING':
        const __refresh = action?.payload?._refresh;
        const __currentPage = action?.payload?._page;
        const context = {
            ...state,
            pListingWaiting :  true,
            pListingMessage :  'Please Wait...',
            pListingPage    :  {
              last_page    : __refresh ? 2 : state.pListingPage.last_page,
              current_page : __refresh ? 1 : state.pListingPage.current_page,
              from         : __refresh ? 1 : state.pListingPage.from,
              total        : __refresh ? 10 : state.pListingPage.total,
            },
            pListingEnds : __refresh ? false : state.pListingEnds
        };
        return context;
      case 'LIST_PRODUCT_SUCCESS':
        const _products    = action?.payload?.data;
        const _productList = _products?.products?.data;
        const _currentPage = action?.payload?._page;
        const isEmpty = _productList.length == 0;
        const _refresh = action?.payload?._refresh;
        return {
          ...state,
          pListingData    : _currentPage > 1 ? [
            ...state.pListingData,
            ..._productList,
          ] : [..._productList],
          pListingWaiting : false,
          pListingFailed  : false,
          pListingMessage : '',
          pListingPage    : {
            last_page    : _refresh ? 2  : _products?.products?.last_page,
            current_page : _refresh ? 1  : _products?.products?.current_page,
            from         : _refresh ? 1  : _products?.products?.from,
            total        : _refresh ? 10 : _products?.products?.total
          },
          pListingcurrency : {
            ..._products.currency
          },
          pListingEnds    :  isEmpty
        };
      case 'LIST_PRODUCT_ERROR':
        return {
          ...state,
          pListingData    : [],
          pListingWaiting : false,
          pListingFailed  : true,
          pListingMessage : action?.payload?.message,
        };
      case 'REDUCE_FROM_PRODUCT_LIST':
        var reduceId = action?.payload?.id;
        return {
          ...state,
          pListingData: state.pListingData.filter((item)=>item.id != reduceId),
          pListingWaiting: false,
        };
      default:
        return state;
    }
  };
  