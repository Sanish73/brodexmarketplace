const OrdersState = {
    oListingWaiting: false,
    oListingMessage: '',
    oListingData: [],
    oListingFailed: false,
    oListingPage: {
      last_page: 2,
      current_page: 1,
      from: 1,
      total: 10
    },
    oListingcurrency : {
      currency_position : "left",
      currency_name     : "USD",
      currency_icon     : "$"
    },
    oListingEnds: false
  };
  
  export const useOrdersListingReducer = (state = OrdersState, action) => {
    switch (action.type) {
      case 'LIST_ORDERS_WAITING':
        const __refresh = action?.payload?._refresh;
        const context = {
          ...state,
          oListingWaiting: true,
          oListingMessage: 'Please Wait...',
          oListingPage: {
            last_page: __refresh ? 2 : state.oListingPage.last_page,
            current_page: __refresh ? 1 : state.oListingPage.current_page,
            from: __refresh ? 1 : state.oListingPage.from,
            total: __refresh ? 10 : state.oListingPage.total,
          },
          oListingEnds: __refresh ? false : state.oListingEnds
        };
        return context;
      case 'LIST_ORDERS_SUCCESS':
        const _orders = action?.payload?.data;
        const _orderList = _orders?.orders?.data;
        const _currentPage = action?.payload?._page;
        const isEmpty = _orderList.length == 0;
        const _refresh = action?.payload?._refresh;
        return {
          ...state,
          oListingData: _currentPage > 1 ? [
            ...state.oListingData,
            ..._orderList,
          ] : [..._orderList],
          oListingWaiting: false,
          oListingFailed: false,
          oListingMessage: '',
          oListingPage: {
            last_page: _refresh ? 2 : _orders?.orders?.last_page,
            current_page: _refresh ? 1 : _orders?.orders?.current_page,
            from: _refresh ? 1 : _orders?.orders?.from,
            total: _refresh ? 10 : _orders?.orders?.total
          },
          oListingcurrency : {
            ..._orders.currency
          },
          oListingEnds: isEmpty
        };
      case 'LIST_ORDERS_ERROR':
        return {
          ...state,
          oListingData: [],
          oListingWaiting: false,
          oListingFailed: true,
          oListingMessage: action?.payload?.message,
        };
      default:
        return state;
    }
  };
  

  const orderDetailInitialState = {
    ordersDetailData      : {},
    ordersDetailisLoading : false,
    ordersDetailerror     : null,
    ordersDetailfailed    : false,
    ordersDetailcurrency  : {}
  };

  export const ordersDetailReducer = (state = orderDetailInitialState, action) => {
    switch (action.type) {
      case 'ORDERS_DETAIL_WAITING':
        return { 
            ...state, 
            ordersDetailisLoading: true, 
            ordersDetailerror: null, 
            ordersDetailfailed: false 
        };
      case 'ORDERS_DETAIL_SUCCESS':
        const datax = action?.payload?.data?.data || {};
        return { 
          ...state, 
          ordersDetailData: datax?.detail || {},
          ordersDetailcurrency: {
            ...(datax.currency || {})
          }, 
          ordersDetailisLoading: false, 
          ordersDetailerror: null, 
          ordersDetailfailed: false 
        };
      case 'ORDERS_DETAIL_ERROR':
        return { 
          ...state, 
          ordersDetailisLoading: false, 
          ordersDetailerror: action.payload, 
          ordersDetailfailed: true 
        };
      default:
        return state;
    }
  };