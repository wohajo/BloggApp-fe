const setPostsPaginationReducer = (state = 1, action: any) => {
    switch(action.type) {
        case 'SET_POSTS_PAGINATION':
            return action.payload;
        case 'RESET_POSTS_PAGINATION':
            return 1;
        default:
            return state;
    }
};

export default setPostsPaginationReducer