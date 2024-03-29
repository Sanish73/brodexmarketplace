import {request} from "../../Common/functions";

const onSearchSuccess = (data, page, refresh) => ({
    type: 'SEARCH_SUCCESS',
    payload:data
});

const getAllOrderData = (data, page, refresh) => ({
    type: 'ORDER_GETTING_DATA',
    payload:data
});


export const searchAction = (token,src) => async dispatch => {
    console.log("this is searchAcion===============");
    // dispatch(onTermCatoListWaiting(page, refresh));

    const orderEndPoint = `product_search`;
    await request(orderEndPoint, {
         src,
    }, function (val, data) {
        if (data) {
            //   {JSON.stringify(data, null ,1)}; 2
            // console.log( dispatch , data)
            // console.log(data, 'searchAction.js------------------')
            // console.log(onSearchSuccess(data));
            dispatch(onSearchSuccess(data));

        } else {
            // dispatch(onTermCatoListError(data
            //     ?.message || "Request Failed. Please try again later."));
            dispatch(onSearchSuccess({}));
        }
    }, function () {
        // dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}