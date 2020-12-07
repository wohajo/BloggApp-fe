// posts
// TODO Interfaces

export const setPosts = (posts: any) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    }
}

export const resetPosts = () => {
    return {
        type: 'RESET_POSTS',
        payload: null
    }
}

// comments

export const setComments = (comments: any) => {
    return {
        type: 'SET_COMMENTS',
        payload: comments
    }
}

export const resetComments = () => {
    return {
        type: 'RESET_COMMENTS',
        payload: null
    }
}