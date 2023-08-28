import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { dataReducer } from './apiReducer';
import { termCatoReducer } from './termCatoReducer';
import {loginReducer} from './loginReducer';
import { forTokenReducer } from './forTokenReducer';
import cartReducer from './cartReducers/cartReducer';
import getAllCartReducer from './cartReducers/getAllCartReducer';
import { getCartTotalReducer } from './cartReducers/getCartTotalReducer'; 
import homeScreenProductsReducer from './homeScreenProductsReducer';
import { addOrderReducer } from './orderReducer/addOrderReducer';
import { getAllOrderReducer } from './orderReducer/getAllOrderReducer';


const rootReducer = combineReducers({
    listBrand                   :       useBrandListingReducer,
    dataReducer                 :       dataReducer,
    termCatoReducer             :       termCatoReducer,
    loginReducer                :       loginReducer,
    forTokenReducer             :       forTokenReducer,
    cartReducer                 :       cartReducer,
    getAllCartReducer           :       getAllCartReducer,
    getCartTotalReducer         :       getCartTotalReducer,
    homeScreenProductsReducer   :       homeScreenProductsReducer,
    addOrderReducer             :       addOrderReducer,
    getAllOrderReducer          :       getAllOrderReducer
});

export { rootReducer };
