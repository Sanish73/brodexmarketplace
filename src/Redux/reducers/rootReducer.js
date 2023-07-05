import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { dataReducer } from './apiReducer';


const rootReducer = combineReducers({
    listBrand        : useBrandListingReducer,
    dataReducer         : dataReducer
});

export { rootReducer };
