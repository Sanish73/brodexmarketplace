const loginState = {
  token: null,
  email: '',
  status:'',
  error: null,
  user_name:'',
  isLoggedIn:false,
  userId:''

};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    //   console.log(action.payload.data.token,"this is global token");
      return {
        ...state,
        token: action.payload.data.token,
        email: action.payload.data.email,
        user_name:action.payload.data.user_name,
        status:action.payload.status,
      
        userId:action.payload.data.user_id
        // error: null,
        // isLoggedIn:true
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
