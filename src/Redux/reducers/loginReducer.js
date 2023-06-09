const LoginState = {
    waiting : false,
    message : '',
    data    : {},
    failed  : false   
};

export const useLoginReducer = (state = LoginState , action ) => {
    switch (action.type) {
        case 'LOGIN_WAITING':
            return {
                ...LoginState,
                waiting : true,
                message : null
            }
        case 'LOGIN_SUCCESS':
            return {
                ...LoginState,
                waiting : false,
                data    : action?.payload || {},
                message : action?.payload?.message || 'Logged in Successfully.'
            }
        case 'LOGIN_ERROR':
            return {
                ...LoginState,
                waiting : false,
                message :  action?.payload?.message || 'Login Failed.',
                failed  : false   
            }
        default:
        return state;
    }
};
