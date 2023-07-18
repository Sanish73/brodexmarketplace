// Define the initial state for the cart
const initialState = {
    data: [],
    _page: 0,
    _refresh: false,
  };
  
  // Define the reducer function for the cart
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CART_STORED_SUCCESS':
        return {
          ...state,
          data: action.payload.data,
          _page: action.payload._page,
          _refresh: action.payload._refresh,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  