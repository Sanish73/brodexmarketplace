import {request} from "../../Common/function";

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

export const productListing = (token, page, refresh) => async dispatch => {
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
}

// export const fetchData = () => (dispatch) => {         //   dispatch({ type:
// 'FETCH_DATA_REQUEST' }); // Dispatch an action to indicate the start of the
// request           console.log('fetch <----------');
// fetch('http://192.168.1.27/brodoxsupermarketapiv1/api/brocato')
// .then((response) => {             // if(response.ok == true){
// console.log(response);                 return response.json();             //
// }else{             //     throw new Error("Something went wrong!");   // }
//  })           .then((data) => {             console.log(data , 'datttttt')
//          // dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });     })
//         .catch((error) => { console.log(error)  //   dispatch({ type:
// 'FETCH_DATA_FAILURE', payload: error.message });     });  };  export const
// fetchData = () => {     return async (dispatch) => {       dispatch({ type:
// 'FETCH_DATA_REQUEST' }); // Dispatch an action to indicate the start of the
// request       const url =
// 'https://realtor.p.rapidapi.com/locations/v2/auto-complete?input=new%20york&l
// i mit=10';       const options = {         method: 'GET',         headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',           'X-RapidAPI-Host':
// 'realtor.p.rapidapi.com'         }       };       try {         const
// response = await fetch(url, options);         if (response.ok) { const data =
// await response.json(); // Successful response, parse the JSON data
// dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data }); // Dispatch an
// action with the retrieved data         } else {           throw new
// Error('Network response was not OK'); // Throw an error for non-successful
// response         }       } catch (error) {         dispatch({ type:
// 'FETCH_DATA_FAILURE', payload: error.message }); // Dispatch an action to
// handle errors       }     };   };