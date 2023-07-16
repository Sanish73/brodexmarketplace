import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { dataReducer } from './apiReducer';
import { termCatoReducer } from './termCatoReducer';
import {loginReducer} from './loginReducer';


const rootReducer = combineReducers({
    listBrand           :       useBrandListingReducer,
    dataReducer         :       dataReducer,
    termCatoReducer     :       termCatoReducer,
    loginReducer        :       loginReducer
});

export { rootReducer };
