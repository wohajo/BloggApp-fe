const setPostsReducer = (state = null, action: any) => {
    switch(action.type) {
        case 'SET_POSTS':
            return action.payload;
        case 'RESET_POSTS':
            return state;
        default:
            return state;
    }
};

export default setPostsReducer