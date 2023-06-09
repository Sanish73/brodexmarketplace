import { request } from '../../Common/index';

export const attributeAddUpdateAction = async (dataset , token , callback , endpoint = 'addAttribute') => {
  await request(endpoint , dataset ,function(v , data){
      return callback(
          data?.result , 
          data?.message || "Request Failed. Please try again later."
      );
  },function(x){
      return callback(
          false, 
          "Please check your internet connection and try again later......"
      );
  } , token)
};


// Action creators for waiting, success, and error states
const onAttributeListWaiting = (refresh) => ({
    type: "LIST_ATTRIBUTE_WAITING",
    payload: { _refresh: refresh },
});
  
const onAttributeListSuccess = (data, page, refresh) => ({
    type: "LIST_ATTRIBUTE_SUCCESS",
    payload: { data: data, _page: page, _refresh: refresh },
});
  
const onAttributeListError = (message) => ({
    type: "LIST_ATTRIBUTE_ERROR",
    payload: { message: message },
});
  
export const listingAttributes = (token, page, refresh) => async (dispatch) => {
    dispatch(onAttributeListWaiting(refresh));
    await request(
      "getAttr",
      { page },
      function (val, data) {
        // console.log(data, "<->>-----");
        if (data?.result) {
          dispatch(onAttributeListSuccess(data, page, refresh));
        } else {
          dispatch(
            onAttributeListError(
              data?.message || "Request Failed. Please try again later."
            )
          );
        }
      },
      function () {
        dispatch(
          onAttributeListError(
            "Please check your internet connection and try again later."
          )
        );
      },
      token
    );
};

export const deleteAttribute = async ( dataset , token  , callback ) => {
  await request('deleteattr' , dataset ,function(v , data){
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

export const reduceRemovedAttribute = (id) => async (dispatch) => {
  return dispatch({
    type    : 'REDUCE_FROM_LIST_ATTRIBUTE',
    payload : { id }
  });
};
