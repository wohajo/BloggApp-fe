const setCommentsReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_COMMENTS':
            return action.payload;
        case 'RESET_COMMENTS':
            return null;
        default:
            return state;
    }
};

export default setCommentsReducer