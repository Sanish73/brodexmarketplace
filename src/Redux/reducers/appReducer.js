const AppState = {
   loginStatus : false,
   loginData   : {},
   loginMsg    : ''
};

export const useLoginSetter = (state = AppState , action ) => {
    switch (action.type) {
        case 'LOGIN_STATE_CHANGED':
            return {
                ...AppState,
                loginStatus : action?.payload?.state || false,
                loginData   : action?.payload?.data || {},
                loginMsg    : action?.payload?.msg || ''
            }
        default:
            return state;
    }
};


