// Action creators for waiting, success, and error states const
// onBrandListWaiting = (refresh) => ({     type: "LIST_BRAND_WAITING",
// payload: { _refresh: refresh }, }); const onBrandListSuccess = (data, page,
// refresh) => ({     type: "LIST_BRAND_SUCCESS",     payload: { data: data,
// _page: page, _refresh: refresh }, }); const onBrandListError = (message) =>
// ({     type: "LIST_BRAND_ERROR",     payload: { message: message }, });

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
        ...data,
        _page: page,
        _refresh: refresh
    }
});

const onProductListError = (message) => ({type: 'LIST_PRODUCT_ERROR', payload: {
        message
    }});


export const featchData = () => {
        return (dispatch) => {
          dispatch({ type: 'FETCH_DATA_REQUEST' }); // Dispatch an action to indicate the start of the request
      
          fetch('http://192.168.1.64/brodoxsupermarketapiv1/api/brocato')
            .then((response) => response.json())
            .then((data) => {
              dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); // Dispatch an action with the retrieved data
            })
            .catch((error) => {
              dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message }); // Dispatch an action to handle errors
            });
        };
 };
      



export const productListing = (token, page, refresh) => async(dispatch) => {
    dispatch(onProductListWaiting(page, refresh));
    await request('brocato', {
        page
    }, function (val, data) {
        if (data
            ?.status) {
            dispatch(onProductListSuccess(data, page, refresh));
        } else {
            dispatch(onProductListError(data
                ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        dispatch(onProductListError("Please check your internet connection and try again later."));
    }, token);
};

export const listingBrands = (token, page, refresh) => async(dispatch) => {

    // try {   const response =await fetch('',{     header:{       Authorization:
    // `Bearer ${token}`,     },   })   if (!response.ok) {     throw new
    // Error('Failed to fetch brands');   }   const data = await response.json();
    // // Dispatch an action with the fetched data   dispatch({ type:
    // 'BRANDS_FETCHED', payload: data }); } catch (error) {   console.error('Error
    // fetching brands:', error);   // Dispatch an error action or handle the error
    // in another way } dispatch(onBrandListWaiting(refresh)); await request(
    // "getBrand",   { page },   function (val, data) {     if (data?.result) {
    //  dispatch(onBrandListSuccess(data, page, refresh));     } else {
    // dispatch(         onBrandListError(           data?.message || "Request
    // Failed. Please try again later."         )       );     }   },   function ()
    // {     dispatch(       onBrandListError(         "Please check your internet
    // connection and try again later."       )     );   },   token );

};