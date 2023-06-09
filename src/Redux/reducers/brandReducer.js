const BrandState = {
    bListingWaiting: false,
    bListingMessage: '',
    bListingData: [],
    bListingFailed: false,
    bListingPage: {
      last_page: 2,
      current_page: 1,
      from: 1,
      total: 10
    },
    bListingEnds: false,
    bListingEndscurrency : {
      currency_position : "left",
      currency_name     : "USD",
      currency_icon     : "$"
    },
};

export const useBrandListingReducer = (state = BrandState, action) => {
    switch (action.type) {
      case 'LIST_BRAND_WAITING':
        const __refresh = action?.payload?._refresh;
        const context = {
          ...state,
          bListingWaiting: true,
          bListingMessage: 'Please Wait...',
          bListingPage: {
            last_page     :  __refresh ? 2  : state.bListingPage.last_page,
            current_page  :  __refresh ? 1  : state.bListingPage.current_page,
            from          :  __refresh ? 1  : state.bListingPage.from,
            total         :  __refresh ? 10 : state.bListingPage.total,
          },
          bListingEnds: __refresh ? false : state.bListingEnds
        };
        return context;
      case 'LIST_BRAND_SUCCESS':
       
        const _brands = action?.payload?.data?.data?.brand;
        const _brandList =_brands?.data;
        const _currentPage = action?.payload?._page;
        const isEmpty = _brandList.length == 0;
        const _refresh = action?.payload?._refresh;
        const _currencyInfo = _brands?.data?.currency;
        return {
          ...state,
          bListingData: _currentPage > 1 ? [
            ...state.bListingData,
            ..._brandList,
          ] : [..._brandList],
          bListingWaiting: false,
          bListingFailed: false,
          bListingMessage: '',
          bListingPage: {
            last_page: _refresh ? 2 : _brands?.last_page,
            current_page: _refresh ? 1 : _brands?.current_page,
            from: _refresh ? 1 : _brands?.from,
            total: _refresh ? 10 : _brands?.total
          },
          pListingcurrency : {
            ..._currencyInfo
          },
          bListingEnds: isEmpty
        };
      case 'LIST_BRAND_ERROR':
        return {
          ...state,
          bListingData: [],
          bListingWaiting: false,
          bListingFailed: true,
          bListingMessage: action?.payload?.message,
        };
      case 'REDUCE_FROM_LIST_BRAND':
        var reduceId = action?.payload?.id;
        return {
          ...state,
          bListingData: state.bListingData.filter((item)=>item.id != reduceId),
          bListingWaiting: false,
        };
      default:
        return state;
    }
};
  