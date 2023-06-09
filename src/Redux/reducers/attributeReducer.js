const AttributeState = {
  aListingWaiting: false,
  aListingMessage: '',
  aListingData: [],
  aListingFailed: false,
  aListingPage: {
    last_page: 2,
    current_page: 1,
    from: 1,
    total: 10
  },
  aListingEnds: false,
  aListingEndscurrency : {
    currency_position : "left",
    currency_name     : "USD",
    currency_icon     : "$"
  },
};

export const useAttributeListingReducer = (state = AttributeState, action) => {
  switch (action.type) {
    case 'LIST_ATTRIBUTE_WAITING':
      const __refresh = action?.payload?._refresh;
      const context = {
        ...state,
        aListingWaiting: true,
        aListingMessage: 'Please Wait...',
        aListingPage: {
          last_page     :  __refresh ? 2  : state.aListingPage.last_page,
          current_page  :  __refresh ? 1  : state.aListingPage.current_page,
          from          :  __refresh ? 1  : state.aListingPage.from,
          total         :  __refresh ? 10 : state.aListingPage.total,
        },
        aListingEnds: __refresh ? false : state.aListingEnds
      };
      return context;
    case 'LIST_ATTRIBUTE_SUCCESS':
      
      const _attributes = action?.payload?.data?.data || {};
      const _attributeList = _attributes?.attr?.data || {};
      const _currentPage = action?.payload?._page || 1;
      const isEmpty = _attributeList.length == 0;
      const _refresh = action?.payload?._refresh || false;
      const _currencyInfo = _attributes?.currency || {};
      const _attrPageInfo = _attributes?.attr || {}; 
      return {
        ...state,
        aListingData: _currentPage > 1 ? [
          ...state.aListingData,
          ..._attributeList,
        ] : [..._attributeList],
        aListingWaiting: false,
        aListingFailed: false,
        aListingMessage: '',
        aListingPage: {
          last_page: _refresh ? 2 : _attrPageInfo?.last_page,
          current_page: _refresh ? 1 : _attrPageInfo?.current_page,
          from: _refresh ? 1 : _attrPageInfo?.from,
          total: _refresh ? 10 : _attrPageInfo?.total
        },
        aListingcurrency : {
          ..._currencyInfo
        },
        aListingEnds: isEmpty
      };
    case 'LIST_ATTRIBUTE_ERROR':
      return {
        ...state,
        aListingData: [],
        aListingWaiting: false,
        aListingFailed: true,
        aListingMessage: action?.payload?.message,
      };
    case 'REDUCE_FROM_LIST_ATTRIBUTE' :
      var reduceId = action?.payload?.id;
      return {
        ...state,
        aListingData: state.aListingData.filter((item)=>item.id != reduceId),
        aListingWaiting: false,
      };
    default:
      return state;
  }
};
