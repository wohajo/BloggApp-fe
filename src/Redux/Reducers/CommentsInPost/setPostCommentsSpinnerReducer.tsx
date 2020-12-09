const setPostCommentsSpinnerReducer = (state = true, action: any) => {
    switch(action.type) {
        case 'POST_COMMENTS_LOADED':
            return false;
        case 'POST_COMMENTS_NOT_LOADED':
            return true;
        default:
            return state;
    }
};

export default setPostCommentsSpinnerReducer