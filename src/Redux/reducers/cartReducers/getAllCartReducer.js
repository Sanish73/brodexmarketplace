
const initialState = {
    cartItems: [],
  };
  
  const getAllCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_CART_SUCCESS':
        // console.log("ooooooooooooooooooooooooo",action);
        return {
          ...state,
          cartItems: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getAllCartReducer;
  