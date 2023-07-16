
// // Define the initial state
// const initialState = {
//   token: '',
//   email: '',
//   id: ''
// };

// // Define the reducer function
// export const forTokenReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'STORE_USER_DATA':
//       return {
//         ...state,
//         token: action.payload.token,
//         email: action.payload.email,
//         id: action.payload.id
//       };
//     default:
//       return state;
//   }
// };



const AppState = {
  loginStatus : false,
  loginData   : {},
  loginMsg    : ''
};

export const forTokenReducer = (state = AppState , action ) => {
   switch (action.type) {
       case 'LOGIN_STATE_CHANGED':
        // console.log('forTOkebReducer DONEEEEEEEEEEEEEEEEEEEEEEEEE');
           return {
               ...AppState,
               loginStatus : action?.payload?.state || false,
               loginData   : action?.payload?.data || {},
               loginMsg    : action?.payload?.msg || ''
           }
       default:
           return state;
   }
};