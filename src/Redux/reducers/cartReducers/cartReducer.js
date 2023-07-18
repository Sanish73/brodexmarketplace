// Define the initial state for the cart
const initialState = {
    cartData: [],
    
  };
  
  // Define the reducer function for the cart
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CART_STORED_SUCCESS':
        
        return {
          ...state,
          cartData: action.payload,
         
        
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  