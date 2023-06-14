
// Action creators for waiting, success, and error states
const onBrandListWaiting = (refresh) => ({
    type: "LIST_BRAND_WAITING",
    payload: { _refresh: refresh },
});
  
const onBrandListSuccess = (data, page, refresh) => ({
    type: "LIST_BRAND_SUCCESS",
    payload: { data: data, _page: page, _refresh: refresh },
});
  
const onBrandListError = (message) => ({
    type: "LIST_BRAND_ERROR",
    payload: { message: message },
});
  
export const listingBrands = (token, page, refresh) => async (dispatch) => {

  // try {
  //   const response =await fetch('',{
  //     header:{
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch brands');
  //   }

  //   const data = await response.json();
  //    // Dispatch an action with the fetched data
  //   dispatch({ type: 'BRANDS_FETCHED', payload: data });

  // } catch (error) {

  //   console.error('Error fetching brands:', error);
  //   // Dispatch an error action or handle the error in another way
    
  // }
    // dispatch(onBrandListWaiting(refresh));
    // await request(
    //   "getBrand",
    //   { page },
    //   function (val, data) {
    //     if (data?.result) {
    //       dispatch(onBrandListSuccess(data, page, refresh));
    //     } else {
    //       dispatch(
    //         onBrandListError(
    //           data?.message || "Request Failed. Please try again later."
    //         )
    //       );
    //     }
    //   },
    //   function () {
    //     dispatch(
    //       onBrandListError(
    //         "Please check your internet connection and try again later."
    //       )
    //     );
    //   },
    //   token
    // );

    
};
  