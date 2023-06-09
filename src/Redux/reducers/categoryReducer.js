const CategoryState = {
  cListingWaiting: false,
  cListingMessage: '',
  cListingData: [],
  cListingFailed: false,
  cListingPage: {
    last_page: 2,
    current_page: 1,
    from: 1,
    total: 10
  },
  cListingEnds     : false,
  cListingcurrency : {
    currency_position : "left",
    currency_name     : "USD",
    currency_icon     : "$"
  },
};

export const useCategoryListingReducer = (state = CategoryState, action) => {
  switch (action.type) {
    case 'LIST_CATEGORY_WAITING':
      const __refresh = action?.payload?._refresh;
      const context = {
        ...state,
        cListingWaiting: true,
        cListingMessage: 'Please Wait...',
        cListingPage: {
          last_page     :  __refresh ? 2  : state.cListingPage.last_page,
          current_page  :  __refresh ? 1  : state.cListingPage.current_page,
          from          :  __refresh ? 1  : state.cListingPage.from,
          total         :  __refresh ? 10 : state.cListingPage.total,
        },
        cListingEnds : __refresh ? false : state.cListingEnds
      };
      return context;
    case 'LIST_CATEGORY_SUCCESS':
      const _categories = action?.payload?.data || {};
      const _categoryList = _categories?.data?.categories?.data || [];
      const _currentPage = action?.payload?._page || 1;
      const isEmpty  = _categoryList.length == 0;
      const _refresh = action?.payload?._refresh || false;
      const _pgInfo  = _categories.data.categories;
      return {
        ...state,
        cListingData: _currentPage > 1 ? [
          ...state.cListingData,
          ..._categoryList,
        ] : [..._categoryList],
        cListingWaiting: false,
        cListingFailed: false,
        cListingMessage: '',
        cListingPage: {
          last_page    : _refresh ? 2  : _pgInfo?.last_page,
          current_page : _refresh ? 1  : _pgInfo?.current_page,
          from         : _refresh ? 1  : _pgInfo?.from,
          total        : _refresh ? 10 : _pgInfo?.total
        },
        cListingcurrency : {
          ..._categories.currency
        },
        cListingEnds: isEmpty
      };
    case 'LIST_CATEGORY_ERROR':
      return {
        ...state,
        cListingData: [],
        cListingWaiting: false,
        cListingFailed: true,
        cListingMessage: action?.payload?.message,
      };
    case 'REDUCE_FROM_LIST_CATEGORY':
      var reduceId = action?.payload?.id;
      return {
        ...state,
        cListingData: state.cListingData.filter((item)=>item.id != reduceId),
      };
    default:
      return state;
  }
};
