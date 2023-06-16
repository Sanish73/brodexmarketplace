// dataReducer.js

const initialState = {
    loading: false,
    error: null,
    data: null,
    isDataFetched: false,
  };
  
  export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
          data: null,
          isDataFetched: false,
        };
      case 'FETCH_DATA_SUCCESS':
        return {
          ...state,
          loading: false,
          error: null,
          data: action.payload,
          isDataFetched: true,
        };
      case 'FETCH_DATA_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
          data: null,
          isDataFetched: false,
        };
      default:
        return state;
    }
  };
  

  