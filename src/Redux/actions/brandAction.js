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


export const fetchData = () => (dispatch) => {
        
        //   dispatch({ type: 'FETCH_DATA_REQUEST' }); // Dispatch an action to indicate the start of the request
          console.log('fetch <----------');
      
          fetch('http://192.168.2.179/brodoxsupermarketapiv1/api/brocato')
          .then((response) => {
            console.log(response , '----===========')
            // if (response.ok) {
              return response.json();
            // } else {
            //   throw new Error('Network response was not OK'); 
            // }
          })
          .then((data) => {
            console.log(data , 'datttttt')
            // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); 
          })
          .catch((error) => {
            console.log(error)
        //   dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
          });
        
     
        
 };
//  export const fetchData = () => {
//     return async (dispatch) => {
//       dispatch({ type: 'FETCH_DATA_REQUEST' }); // Dispatch an action to indicate the start of the request
  
//       const url = 'https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&limit=10';
//       const options = {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//           'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
//         }
//       };
  
//       try {
//         const response = await fetch(url, options);
//         if (response.ok) {
//           const data = await response.json(); // Successful response, parse the JSON data
//           dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); // Dispatch an action with the retrieved data
//         } else {
//           throw new Error('Network response was not OK'); // Throw an error for non-successful response
//         }
//       } catch (error) {
//         dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message }); // Dispatch an action to handle errors
//       }
//     };
//   };
  
      
  


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
