import {  request } from '../../Common/index';

export const brandAddAction = async ( dataset , token  , callback , endpoint = 'addBrand') => {
    await request(endpoint , dataset ,function(v , data){
        return callback(
            data?.result , 
            data?.message || "Request Failed. Please try again later."
        );
    },function(){
        return callback(
            false, 
            "Please check your internet connection and try again later."
        );
    } , token)
};


export const removeBrandImage = async ( dataset , token  , callback , $addEndpoint = 'remcatimg' ) => {
  await request($addEndpoint , dataset ,function(v , data){
      return callback(
          data?.result , 
          data?.message || "Request Failed. Please try again later."
      );
  },function(){
      return callback(
          false, 
          "Please check your internet connection and try again later."
      );
  } , token)
}

export const removeBrand = async ( dataset , token  , callback ) => {
  await request('delbrand' , dataset ,function(v , data){
      return callback(
          data?.result , 
          data?.message || "Request Failed. Please try again later."
      );
  },function(){
      return callback(
          false, 
          "Please check your internet connection and try again later."
      );
  } , token)
}


export const reduceRemovedBrand = (id) => async (dispatch) => {
    return dispatch({
      type    : 'REDUCE_FROM_LIST_BRAND',
      payload : { id }
    });
};


// Action creators for waiting, success, and error states
const onBrandListWaiting = (refresh) => ({
    type: "LIST_BRAND_WAITING",
    payload: { _refresh: refresh },
});
  
const onBrandListSuccess = (data, page, refresh) => ({
    type: "LIST_BRAND_SUCCESS",
    payload: { data: data, _page: page, _refresh: refresh },
});
  
const onBrandListError = (message) => ({
    type: "LIST_BRAND_ERROR",
    payload: { message: message },
});
  
export const listingBrands = (token, page, refresh) => async (dispatch) => {
    dispatch(onBrandListWaiting(refresh));
    await request(
      "getBrand",
      { page },
      function (val, data) {
        if (data?.result) {
          dispatch(onBrandListSuccess(data, page, refresh));
        } else {
          dispatch(
            onBrandListError(
              data?.message || "Request Failed. Please try again later."
            )
          );
        }
      },
      function () {
        dispatch(
          onBrandListError(
            "Please check your internet connection and try again later."
          )
        );
      },
      token
    );
};
  