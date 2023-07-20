// Assuming your initial state looks like this
const initialState = {
    cartTotalPrice: 0, // Initial total cart price is 0
  };
  
  export const getCartTotalReducer = (state = initialState, action) => {
    // console.log("s----------------------------------dljflkdf");
    
    switch (action.type) {
      case 'GET_ALL_CART_TOTAL_SUCCESS':
        // console.log("s----------------------------------dljflkdf",action);
        // Update the total cart price in the state with the data from the action payload
        return {
          ...state,
          cartTotalPrice: action.payload,
        };
      default:
        return state;
    }
  };
  
 