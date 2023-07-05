const BrandState = {
    bListingWaiting: false,
    clicked: false,
    loading: false,
    _page: null,
    _refresh: null,
  };

export const useBrandListingReducer = (state = BrandState, action) => {
  
    switch (action.type) {
      case 'LIST_PRODUCT_WAITING':
        return {
          ...state,
          loading: action.payload.loading,
          _page: action.payload._page,
          _refresh: action.payload._refresh
        };
      case 'LIST_PRODUCT_SUCCESS':
        return {
          ...state,
        
        };
      case 'LIST_PRODUCT_ERROR':
        return {
          ...state,
        };
      case 'REDUCE_FROM_LIST_BRAND':
        var reduceId = action?.payload?.id;
        return {
          ...state,
        
        };
      default:
        return state;
    }
};
  


