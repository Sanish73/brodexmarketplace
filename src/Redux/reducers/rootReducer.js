import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { dataReducer } from './apiReducer';
import { termCatoReducer } from './termCatoReducer';
import {loginReducer} from './loginReducer';
import { forTokenReducer } from './forTokenReducer';


const rootReducer = combineReducers({
    listBrand           :       useBrandListingReducer,
    dataReducer         :       dataReducer,
    termCatoReducer     :       termCatoReducer,
    loginReducer        :       loginReducer,
    forTokenReducer     :       forTokenReducer
});

export { rootReducer };
