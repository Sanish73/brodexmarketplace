const initialState = {
    noti_loading: false,
    noti_data: [],
    noti_error: null
};
  
export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LIST_NOTIFICATION_WAITING":
        return {
          ...state,
          noti_loading: true
        };
      case "LIST_NOTIFICATION_SUCCESS":
        return {
          ...state,
          noti_loading: false,
          noti_data: action?.payload?.data?.data || []
        };
      case "LIST_NOTIFICATION_ERROR":
        return {
          ...state,
          noti_loading: false,
          noti_error: action.payload.message,
        };
      default:
        return state;
    }
  };
  