const setSearchedPostsSpinnerReducer = (state = true, action: any) => {
    switch(action.type) {
        case 'SEARCHED_POSTS_LOADED':
            return false;
        case 'SEARCHED_POSTS_NOT_LOADED':
            return true;
        default:
            return state;
    }
};

export default setSearchedPostsSpinnerReducer