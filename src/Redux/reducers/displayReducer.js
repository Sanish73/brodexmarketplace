const summaryState = {
    summaryData    : [],
    summaryMsg     : '',
    summaryWaiting : false,
    summaryfailed  : false
 };
 
 export const useDisplay = (state = summaryState , action ) => {
     switch (action.type) {
        case 'HOME_SUMMARY_WAITING':
             return {
                 ...summaryState,
                 summaryWaiting : true,
                 summaryfailed  : false
             }
        case 'HOME_SUMMARY_WAITING_SUCCESS':
            return {
                ...summaryState,
                summaryWaiting : false,
                summaryfailed  : !action?.payload?.result,
                summaryData    : action?.payload?.result ? action?.payload?.data : {}
            }
        case 'HOME_SUMMARY_WAITING_ERROR':
            return {
                ...summaryState,
                summaryWaiting : false,
                summaryfailed  : true
            }
         default:
             return state;
     }
 };
 
 
 