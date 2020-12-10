const setErrorsReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_ERRORS':
            return action.payload;
        case 'RESET_ERRORS':
            return null;
        default:
            return state;
    }
};

export default setErrorsReducer