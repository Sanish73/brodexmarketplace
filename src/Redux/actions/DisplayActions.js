import {  request , empty } from '../../Common/index';

const onHomeSummaryWaiting = () => ({
    type: 'HOME_SUMMARY_WAITING',
    payload: {
        loading : true
    },
});
const onHomeSummarySuccess = (data) => ({
    type: 'HOME_SUMMARY_WAITING_SUCCESS',
    payload: {
        ...data
    },
});
const onHomeSummaryError = (message) => ({
    type: 'HOME_SUMMARY_WAITING_ERROR',
    payload: {
        message
    },
});

export const getHomeSummary = (token , $dataset , unAuthenticated = ()=>{} ) => async dispatch  => {
    dispatch(onHomeSummaryWaiting());
    await request('init' , $dataset , function(val , data){
       if(data?.result){
            dispatch(onHomeSummarySuccess(data));
       }else{
            if(data?.status == 404){
                return unAuthenticated(data);
            }else{
                dispatch(onHomeSummaryError(data?.message || "Login Failed. Please try again later."));
            }
       }
    },function(){
        dispatch(onHomeSummaryError("Please check your internet connection and try again later."));
    }, token)
}