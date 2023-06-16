import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { buttonReducer } from './brandReducer';
import { dataReducer } from './apiReducer';


const rootReducer = combineReducers({
    listBrand        : useBrandListingReducer,
    buttonReducer     :   buttonReducer,
    dataReducer         : dataReducer
});

export { rootReducer };
