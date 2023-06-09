import { request } from '../../Common/index';

export const categoryaddInfo = async (token , callback) => {
  await request('catoadder' , {a:'a'} ,function(v , data){
        return callback(
            data?.result , 
            data?.data || {}
        );
    },function(){
        return callback(
            false, 
            "Please check your internet connection and try again later."
        );
    } , token)
}

export const categoryAddUpdateAction = async ( dataset , token  , callback , endpoint = 'addCategory' ) => {
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
}

export const removeCategoryImage = async ( dataset , token  , callback ) => {
  await request('remcatimg' , dataset ,function(v , data){
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

export const removeCategory = async ( dataset , token  , callback ) => {
  await request('delcato' , dataset ,function(v , data){
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

export const getCategoryDetail = async ( dataset , token  , callback ) => {
  await request('getCatoDetail' , dataset ,function(v , data){
      return callback(
          data?.result, 
          data?.result == false ? data.message : data || {}
      );
  },function(){
      return callback(
          false, 
          "Please check your internet connection and try again later."
      );
  } , token)
}

export const reduceRemovedCategory = (id) => async (dispatch) => {
  return dispatch({
      type    : 'REDUCE_FROM_LIST_CATEGORY',
      payload : { id }
    });
};

// Action creators for waiting, success, and error states
const onCategoryListWaiting = (refresh) => ({
  type: "LIST_CATEGORY_WAITING",
  payload: { _refresh: refresh },
});

const onCategoryListSuccess = (data, page ,refresh) => ({
  type: "LIST_CATEGORY_SUCCESS",
  payload: { data: data, _page: page, _refresh: refresh },
});

const onCategoryListError = (message) => ({
  type: "LIST_CATEGORY_ERROR",
  payload: { message: message },
});

// Async action creator that dispatches appropriate actions based on API call result
export const listingCategory = (token, page , refresh) => async (dispatch) => {
  dispatch(onCategoryListWaiting(refresh));
  await request(
    'getCato',
    {page},
    function (val, data) {
      if (data?.result) {
        dispatch(onCategoryListSuccess(data, page , refresh));
      } else {
        dispatch(
          onCategoryListError(
            data?.message || 'Request Failed. Please try again later.'
          )
        );
      }
    },
    function () {
      dispatch(
        onCategoryListError(
          'Please check your internet connection and try again later.'
        )
      );
    },
    token
  );
};
