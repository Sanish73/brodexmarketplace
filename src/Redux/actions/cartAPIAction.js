import {request} from "../../Common/functions";

const onCartAPISuccess = (data, page, refresh) => ({
    type: 'CART_STORED_SUCCESS',
    payload:data
});

const onGetAllCartSuccess = (data, page, refresh) => ({
    type: 'GET_ALL_CART_SUCCESS',
    payload:data
});




export const cartAPIAction = (token, id,qty,productPrice,productName,productImage) => async dispatch => {
    // console.log("this is cartAPIAction===============",{id});
    // dispatch(onTermCatoListWaiting(page, refresh));

    const cartAPIEndpoint = `add_to_cart`;
    await request(cartAPIEndpoint, {
        id,
        qty,
        productName,
        productPrice,
        productImage
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



export const getAllCartItems = (token, page) => async dispatch => {
    console.log("this is getAllCartItems===============");
    // dispatch(onTermCatoListWaiting(page, refresh));

    const Endpoint = `get_all_cart`;
    await request(Endpoint, {
        page
    }, function (val, data) {
        if (data) {
            console.log(data, 'cartaAPIAction.js===getAllCartItems------------------')
            dispatch(onGetAllCartSuccess(data));
        } else {
            // dispatch(onTermCatoListError(data
            //     ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        // dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}