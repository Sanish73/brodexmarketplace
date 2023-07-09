const TermState = {
    bListingWaiting: false,
    clicked: false,
    loading: false,
    _page: null,
    _refresh: null,
    _termData:[]
  };

export const termCatoReducer = (state = TermState, action) => {
  
    switch (action.type) {
      case 'TERM_CATO_LIST_PRODUCT_WAITING':
        return {
          ...state,
          loading: true,
          _page: action.payload._page,
          _refresh: action.payload._refresh,
          _termData : []
        };
      case 'TERM_CATO_LIST_PRODUCT_SUCCESS':
        return {
          ...state,
          _termData : action.payload.data,
          _page: action.payload._page,
          _refresh: action.payload._refresh
        
        };
      case 'TERM_CATO_LIST_PRODUCT_ERROR':
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
  


