const initialState = {
    ordersList: [],
  };
  
  export const getAllOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ORDER_GETTING_DATA':
        // Assuming the 'data' received contains the new order, and you want to add it to the state.
        // If 'data' contains the entire updated order list, you can directly use it without spreading.
        return {
          ...state,
          ordersList:  action.payload, // Adding the new order to the existing order list
        };
      default:
        return state; // Return the current state if the action type doesn't match
    }
  };
  
 