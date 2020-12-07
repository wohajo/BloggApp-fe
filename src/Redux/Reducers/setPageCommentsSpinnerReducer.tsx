const setPageCommentsSpinnerReducer = (state = true, action: any) => {
    switch(action.type) {
        case 'PAGE_COMMENTS_LOADED':
            return false;
        case 'PAGE_COMMENTS_NOT_LOADED':
            return true;
        default:
            return state;
    }
};

export default setPageCommentsSpinnerReducer