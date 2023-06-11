import { combineReducers } from 'redux';
import { useBrandListingReducer } from './brandReducer';

const rootReducer = combineReducers({
    loginAct         : useLoginReducer,
    useLoginSetter   : useLoginSetter,
    useDisplay       : useDisplay,
    listProducts     : useProductListingReducer,
    listOrders       : useOrdersListingReducer,
    listCategory     : useCategoryListingReducer,
    listBrand        : useBrandListingReducer,
    listAttribute    : useAttributeListingReducer,
    orderDetail      : ordersDetailReducer,
    listNotification : notificationReducer
});

export { rootReducer };
