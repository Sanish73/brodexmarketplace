import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';
import { buttonReducer } from './brandReducer';

const rootReducer = combineReducers({
    listBrand        : useBrandListingReducer,
    buttonReducer     :   buttonReducer
});

export { rootReducer };
