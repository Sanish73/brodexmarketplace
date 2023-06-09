import {  request , empty } from '../../Common/index';

const onNotificationListWaiting = () => ({
  type: "LIST_NOTIFICATION_WAITING",
  payload: { },
});

const onNotificationListSuccess = (data) => ({
  type: "LIST_NOTIFICATION_SUCCESS",
  payload: { data: data },
});

const onNotificationListError = (message) => ({
  type: "LIST_NOTIFICATION_ERROR",
  payload: { message: message },
});


export const listingNotification = (token) => async (dispatch) => {
  dispatch(onNotificationListWaiting());
  await request(
    'notifylisting',
    {a:'1'},
    function (val, data) {
      if (data?.result) {
        dispatch(onNotificationListSuccess(data));
      } else {
        dispatch(
          onNotificationListError(
            data?.message || 'Request Failed. Please try again later.'
          )
        );
      }
    },
    function () {
      dispatch(
        onNotificationListError(
          'Please check your internet connection and try again later.'
        )
      );
    },
    token
  );
};
