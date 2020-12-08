const setPagePostsSpinnerReducer = (state = true, action: any) => {
    switch(action.type) {
        case 'POSTS_LOADED':
            return false;
        case 'POSTS_NOT_LOADED':
            return true;
        default:
            return state;
    }
};

export default setPagePostsSpinnerReducer