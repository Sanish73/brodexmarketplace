import {  request , empty } from '../../Common/index';

const onLoginWaiting = () => ({
    type: 'LOGIN_WAITING',
    payload: {
        loading : true
    },
});
const onLoginSuccess = (data) => ({
    type: 'LOGIN_SUCCESS',
    payload: {
        ...data
    },
});
const onLoginError = (message) => ({
    type: 'LOGIN_ERROR',
    payload: {
        message
    },
});
export const loginAction = (email , password  , notificationId , successcallback , failedcallback) => async dispatch  => {
    dispatch(onLoginWaiting());
    await request('login' , {
        email ,
        password,
        nid:notificationId
    },function(val , data){
       if(data?.status){
          dispatch(onLoginSuccess(data));
          successcallback(data)
       }else{
          const msg = data?.message || "Login Failed. Please try again later.";
          dispatch(onLoginError(msg));
          failedcallback(msg);
       }
    },function(){
        dispatch(onLoginError("Please check your internet connection and try again later."));
        failedcallback("Please check your internet connection and try again later.");
    })
}


export const logoutaction = async (token , successcallback) => {
    await request('logout' , {a:'a'},function(val , data){
       successcallback(data?.status , data);
    },function(stack){
       successcallback(false , stack)
    } , token)
}