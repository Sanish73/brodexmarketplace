import {request} from "../../Common/functions";

const onCartAPISuccess = (data, page, refresh) => ({
    type: 'CART_STORED_SUCCESS',
    payload:data
});

export const cartAPIAction = (token, id,qty,productPrice,productName) => async dispatch => {
    // console.log("this is cartAPIAction===============",{id});
    // dispatch(onTermCatoListWaiting(page, refresh));

    const cartAPIEndpoint = `add_to_cart`;
    await request(cartAPIEndpoint, {
        id,
        qty,
        productName,
        productPrice
    }, function (val, data) {
        if (data) {
            console.log(data, 'cartaAPIAction.js------------------')
            dispatch(onCartAPISuccess(data));
        } else {
            // dispatch(onTermCatoListError(data
            //     ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        // dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}