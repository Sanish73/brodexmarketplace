// dataReducer.js

const searchState = {
    loading: false,
    error: null,
    data: [],
    isDataFetched: false,
  };
  
  export const searchReducer = (state = searchState, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
          return {
            ...state,
            data: action.payload
          };
    
    
        default:
          return state;
      }
  };
  

  