import { combineReducers } from 'redux';
import { useLoginReducer } from './loginReducer';
import { useLoginSetter } from './appReducer';
import { useDisplay } from './displayReducer';
import { useBrandListingReducer } from './brandReducer';
import { useProductListingReducer } from './productReducer';
import { useOrdersListingReducer , ordersDetailReducer } from './orderReducer';
import { useCategoryListingReducer } from './categoryReducer';
import { useAttributeListingReducer } from './attributeReducer';
import { notificationReducer } from './notificationReducer';

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
