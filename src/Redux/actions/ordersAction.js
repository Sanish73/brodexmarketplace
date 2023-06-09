import { request } from '../../Common/index';

const onOrdersListWaiting = (page, refresh) => ({
    type: 'LIST_ORDERS_WAITING',
    payload: {
        loading: true,
        _page: page,
        _refresh: refresh,
    },
});
  
const onOrdersListSuccess = (data, page, refresh) => ({
    type: 'LIST_ORDERS_SUCCESS',
    payload: {
        ...data,
        _page: page,
        _refresh: refresh,
    },
});
  
const onOrdersListError = (message) => ({
    type: 'LIST_ORDERS_ERROR',
    payload: {
      message,
    },
});
  
export const ordersListing = (token, page, refresh) => async (dispatch) => {
    dispatch(onOrdersListWaiting(page, refresh));
    await request(
      'getOrders',
      { page },
      function (val, data) {
        if (data?.status) {
          dispatch(onOrdersListSuccess(data, page, refresh));
        } else {
          dispatch(
            onOrdersListError(
              data?.message || 'Request Failed. Please try again later.'
            )
          );
        }
      },
      function () {
        dispatch(
          onOrdersListError(
            'Please check your internet connection and try again later.'
          )
        );
      },
      token
    );
};
  
const onOrdersDetailWaiting = (id) => ({
  type: "ORDERS_DETAIL_WAITING",
  payload: { id },
});

const onOrdersDetailSuccess = (data) => ({
  type: "ORDERS_DETAIL_SUCCESS",
  payload: { data },
});

const onOrdersDetailError = (message) => ({
  type: "ORDERS_DETAIL_ERROR",
  payload: { message },
});

export const getOrdersDetail = (token, id) => async (dispatch) => {
  dispatch(onOrdersDetailWaiting(id));
  await request(
    "getOrdersDetail",
    { id },
    function (val, data) {
      if (data?.result) {
        dispatch(onOrdersDetailSuccess(data, id));
      } else {
        dispatch(
          onOrdersDetailError(
            data?.message || "Request Failed. Please try again later."
          )
        );
      }
    },
    function () {
      dispatch(
        onOrdersDetailError(
          "Please check your internet connection and try again later."
        )
      );
    },
    token
  );
};


export const updateOrderStatus = async ( dataset , token  , callback ) => {
  await request('updateOrderstatus' , dataset ,function(v , data){
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

