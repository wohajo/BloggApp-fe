const setSearchedPostsReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_SEARCHED_POSTS':
            return action.payload;
        case 'RESET_SEARCHED_POSTS':
            return state;
        default:
            return state;
    }
};

export default setSearchedPostsReducer