const initialState = {
    homePageProducts: [],
    currentPage: 1,
    isRefreshing: false,
  };

  const homeScreenProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'HOME_PAGE_PRODUCT_SUCCESS':
        // const { payload, page, refresh } = action;
        // // If `refresh` is true, we update the state with the new data.
        // // Otherwise, append the new data to the existing products array.
        // const updatedProducts = refresh ? payload : [...state.homePageProducts, ...payload];
  
        return {
          ...state,
          homePageProducts: action.payload
        };
  
      // Handle other actions here if needed.
  
      default:
        return state;
    }
  };
  
  export default homeScreenProductsReducer;
  