const BrandState = {
    bListingWaiting: false,
    clicked: false
};



export const buttonReducer = (state = BrandState, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return {
        ...state,
        clicked: true
      };
    default:
      return state;
  }
};

export const useBrandListingReducer = (state = BrandState, action) => {
    switch (action.type) {
      case 'LIST_BRAND_WAITING':
        const context = {
          ...state
        };
        return context;
      case 'LIST_BRAND_SUCCESS':
        return {
          ...state,
        
        };
      case 'LIST_BRAND_ERROR':
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
  


