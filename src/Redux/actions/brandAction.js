import {request} from "../../Common/functions";
import AsyncStorage from '@react-native-async-storage/async-storage';


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

// =======================================login====================================================
const onLoginSuccess = (data, page, refresh) => ({
   
    type: 'LOGIN_SUCCESS',
    payload:data
        
     
});


const OnLoginError = (message) => ({type: 'LOGIN_ERROR', payload: {
    message
}});

// ===========================token==========================

export const loginStateChange =(state = false , data={} , msg = "")=>async dispatch =>{
    // console.log("happpppppppppppppppppppppppppppppppppppppp");
    dispatch({
        type : 'LOGIN_STATE_CHANGED',
        payload:{
            state, 
            data,
            msg
        }
    })
}

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
    console.log("this is brandAction===============",{categoryId});
    dispatch(onTermCatoListWaiting(page, refresh));

    const categoryEndpoint = `relatedProduct/${categoryId}`;
    await request(categoryEndpoint, {
        page
    }, function (val, data) {
        if (data) {
            // console.log(data, 'BrandAction.js------------------')
            dispatch(onTermCatoListSuccess(data, page, refresh));
        } else {
            dispatch(onTermCatoListError(data
                ?.message || "Request Failed. Please try again later."));
        }
    }, function () {
        dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}

export const login = (token, email , password, page, refresh,successcallBack) => async dispatch => {
    console.log("this is Login===============",{email});
    // dispatch(onTermCatoListWaiting(page, refresh));

   
        const loginEndpoint = `login`;
            await request(loginEndpoint, {
                email,
                password
            }, function (val, data) {

             if(data?.status){
                // console.log(data,"///////////////");
                dispatch(onLoginSuccess(data, page, refresh));
                successcallBack(data);
             }
     
    }, function () {
        dispatch(onTermCatoListError("Please check your internet connection and try again later."));
    }, token);
}


// export const storeUserData = (token, email, id) => {
//   return async (dispatch) => {
//     // Store the data in AsyncStorage
//     try {
//       await AsyncStorage.setItem('token', token);
//       await AsyncStorage.setItem('email', email);
//       await AsyncStorage.setItem('id', id);

//       // Dispatch an action to update the Redux store with the payload
//       dispatch({
//         type: 'STORE_USER_DATA',
//         payload: { token, email, id }
//       });
//     } catch (error) {
//       // Handle any error that occurs during storage
//       console.error('Error storing user data:', error);
//     }
//   };
// };


