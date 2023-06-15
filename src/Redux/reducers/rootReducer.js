import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';

const rootReducer = combineReducers({
    listBrand        : useBrandListingReducer
});

export { rootReducer };
