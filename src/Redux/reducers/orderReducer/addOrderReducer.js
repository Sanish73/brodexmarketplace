// Assuming initial state for orders is an empty array
const initialState = {
    orders: [],
  };
  
  export const addOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ORDER_ADDED_SUCCESS':
        // Assuming the 'data' received contains the new order, and you want to add it to the state.
        // If 'data' contains the entire updated order list, you can directly use it without spreading.
        return {
          ...state,
          orders: [...state.orders, action.payload], // Adding the new order to the existing order list
        };
      default:
        return state; // Return the current state if the action type doesn't match
    }
  };
  
 