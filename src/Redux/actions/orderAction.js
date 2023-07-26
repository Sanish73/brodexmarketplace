
import {request} from "../../Common/functions";

const onOrderAddSuccess = (data, page, refresh) => ({
    type: 'ORDER_ADDED_SUCCESS',
    payload:data
});

export const addOrderAction = (token, order_no) => async dispatch => {
    // console.log("this is cartAPIAction===============",{id});
    // dispatch(onTermCatoListWaiting(page, refresh));

    const orderEndPoint = `add_order`;
    await request(orderEndPoint, {
        order_no
    }, function (val, data) {
        if (data) {
            console.log(data, 'cartaAPIAction.js------------------')
            dispatch(onOrderAddSuccess(data));
        } else {
            // dispatch(onTermCatoListError(data
            //     ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        // dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}

