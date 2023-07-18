import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { dataReducer } from './apiReducer';
import { termCatoReducer } from './termCatoReducer';
import {loginReducer} from './loginReducer';
import { forTokenReducer } from './forTokenReducer';
import cartReducer from './cartReducers/cartReducer';
import getAllCartReducer from './cartReducers/getAllCartReducer';
import { getCartTotalReducer } from './cartReducers/GetCartTotalReducer';


const rootReducer = combineReducers({
    listBrand           :       useBrandListingReducer,
    dataReducer         :       dataReducer,
    termCatoReducer     :       termCatoReducer,
    loginReducer        :       loginReducer,
    forTokenReducer     :       forTokenReducer,
    cartReducer         :       cartReducer,
    getAllCartReducer   :       getAllCartReducer,
    getCartTotalReducer :       getCartTotalReducer
});

export { rootReducer };
