export const loginStateChange = (state = false , data = {} , msg = "") => async dispatch  => {
    dispatch({
        type: 'LOGIN_STATE_CHANGED',
        payload: { state  , data , msg}
    });
}
