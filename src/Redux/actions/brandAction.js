import {request} from "../../Common/functions";

const onProductListWaiting = (page, refresh) => ({
    type: 'LIST_PRODUCT_WAITING',
    payload: {
        loading: true,
        _page: page,
        _refresh: refresh
    }
});

const onProductListSuccess = (data, page, refresh) => ({
    type: 'LIST_PRODUCT_SUCCESS',
    payload: {
        data,
        _page: page,
        _refresh: refresh
    }
});

const onProductListError = (message) => ({type: 'LIST_PRODUCT_ERROR', payload: {
        message
    }});
// ==============================termCato=======================================

const onTermCatoListWaiting = (page, refresh) => ({
    type: 'TERM_CATO_LIST_PRODUCT_WAITING',
    payload: {
        loading: true,
        _page: page,
        _refresh: refresh
    }
});

const onTermCatoListSuccess = (data, page, refresh) => ({
    type: 'TERM_CATO_LIST_PRODUCT_SUCCESS',
    payload: {
        data,
        _page: page,
        _refresh: refresh
    }
});

const onTermCatoListError = (message) => ({type: 'TERM_CATO_LIST_PRODUCT_ERROR', payload: {
        message
    }});

// =======================================termcato====================================================
export const productListing = (token, page, refresh) => async dispatch => {
   
    dispatch(onProductListWaiting(page, refresh));

    await request('get_category', {
        page
    }, function (val, data) {
        if (data) {
            // console.log(data, '------')
            dispatch(onProductListSuccess(data, page, refresh));
        } else {
            dispatch(onProductListError(data
                ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        dispatch(onProductListError("Please check your internet connection and try again later."));
    }, token);
}

export const termCatoListing = (token, categoryId, page, refresh) => async dispatch => {
    console.log({categoryId});
    // dispatch(onTermCatoListWaiting(page, refresh));

    const categoryEndpoint = `categories/330/terms`;
    await request(categoryEndpoint, {
        page
    }, function (val, data) {
        if (data) {
            console.log(data, '------')
            dispatch(onTermCatoListSuccess(data, page, refresh));
        } else {
            dispatch(onTermCatoListError(data
                ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}
