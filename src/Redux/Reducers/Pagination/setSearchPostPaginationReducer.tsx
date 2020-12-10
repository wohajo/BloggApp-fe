const setSearchPostPaginationReducer = (state = 1, action: any) => {
    switch(action.type) {
        case 'SET_SEARCH_POSTS_PAGINATION':
            return action.payload;
        case 'RESET_SEARCH_POSTS_PAGINATION':
            return 1;
        default:
            return state;
    }
};

export default setSearchPostPaginationReducer