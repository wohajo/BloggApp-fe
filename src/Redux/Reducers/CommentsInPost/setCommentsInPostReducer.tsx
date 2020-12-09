const setCommentsInPostReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_POST_COMMENTS':
            return action.payload;
        case 'RESET_POST_COMMENTS':
            return null;
        default:
            return state;
    }
};

export default setCommentsInPostReducer