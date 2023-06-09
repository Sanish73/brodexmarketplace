import { request } from '../../Common/index';


export const productaddInfo = async (token , callback) => {
    await request('productadder' , {a:'a'} ,function(v , data){
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

export const getparentschildcato = async (token  , dataset , callback) => {
    await request('getsubc' , dataset ,function(v , data){
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


export const productAddUpdateAction = async ( dataset , token  , callback , endpoint = 'addProduct') => {
  await request(endpoint , dataset ,function(v , data){
      return callback(
          data?.result , 
          data || {}
      );
  },function(){
      return callback(
          false, 
          "Please check your internet connection and try again later."
      );
  } , token);
}

export const deleteProduct = async ( dataset , token  , callback ) => {
    await request('delpro' , dataset ,function(v , data){
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

export const reduceRemovedProduct = (id) => async (dispatch) => {
    return dispatch({
      type    : 'REDUCE_FROM_PRODUCT_LIST',
      payload : { id }
    });
};

const onProductListWaiting = (page , refresh) => ({
    type: 'LIST_PRODUCT_WAITING',
    payload: {
        loading  : true,
        _page    : page,
        _refresh : refresh
    },
});

const onProductListSuccess = (data , page , refresh) => ({
    type: 'LIST_PRODUCT_SUCCESS',
    payload: {
        ...data,
        _page    : page,
        _refresh : refresh
    },
});
const onProductListError = (message) => ({
    type: 'LIST_PRODUCT_ERROR',
    payload: {
        message
    },
});

export const productListing = (token , page , refresh) => async dispatch  => {
    dispatch(onProductListWaiting(page , refresh));
    await request('getProducts' , {page} , function(val , data){
    if(data?.status){
        dispatch(onProductListSuccess(data , page , refresh));
    }else{
        dispatch(onProductListError(data?.message || "Request Failed. Please try again later."));
    }
    },function(){
        dispatch(onProductListError("Please check your internet connection and try again later."));
    },token); 
}

export const getProductDetail = async ( dataset , token  , callback ) => {
    await request('getProduct' , dataset ,function(v , data){
        return callback(
            data?.result , 
            data?.result == false ? data.message : data || {}
        );
    },function(){
        return callback(
            false, 
            "Please check your internet connection and try again later."
        );
    } , token)
}
  

export const removeProductImage = async ( dataset , token  , callback ) => {
    await request('removeimg' , dataset ,function(v , data){
        return callback(
            data?.result , 
            data || {}
        );
    },function(){
        return callback(
            false, 
            "Please check your internet connection and try again later."
        );
    } , token)
  }

  