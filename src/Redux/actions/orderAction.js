
import {request} from "../../Common/functions";

const onOrderAddSuccess = (data, page, refresh) => ({
    type: 'ORDER_ADDED_SUCCESS',
    payload:data
});

export const addOrderAction = (token,deliveryAt,location, name,phone,addressInfo,total) => async dispatch => {
    console.log("this is cartAPIAction===============");
    // dispatch(onTermCatoListWaiting(page, refresh));

    const orderEndPoint = `add_order`;
    await request(orderEndPoint, {
        deliveryAt,
        location,
         name,
         phone,
         addressInfo,
         total
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

