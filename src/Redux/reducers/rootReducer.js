import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { dataReducer } from './apiReducer';
import { termCatoReducer } from './termCatoReducer';


const rootReducer = combineReducers({
    listBrand        : useBrandListingReducer,
    dataReducer         : dataReducer,
    termCatoReducer :termCatoReducer
});

export { rootReducer };
