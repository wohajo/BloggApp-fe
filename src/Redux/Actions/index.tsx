// posts
// TODO Interfaces

import { commentInterface, postInterface } from "../../Interfaces/interfaces"

export const setPosts = (posts: Array<postInterface>) => {
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

export const setComments = (comments: Array<commentInterface>) => {
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

// post comments

export const setPostComments = (comments: Array<commentInterface>) => {
    return {
        type: 'SET_POST_COMMENTS',
        payload: comments
    }
}

export const resetPostComments = () => {
    return {
        type: 'RESET_POST_COMMENTS',
        payload: null
    }
}

// posts spinner

export const profilePostsLoaded = () => {
    return {
        type: 'POSTS_LOADED',
        payload: false
    }
}

export const profilePostsNotLoaded = () => {
    return {
        type: 'POSTS_NOT_LOADED',
        payload: true
    }
}

// comments spinner

export const pageCommentsLoaded = () => {
    return {
        type: 'PAGE_COMMENTS_LOADED',
        payload: false
    }
}

export const pageCommentsNotLoaded = () => {
    return {
        type: 'PAGE_COMMENTS_NOT_LOADED',
        payload: true
    }
}

// post comments spinner

export const postCommentsLoaded = () => {
    return {
        type: 'POST_COMMENTS_LOADED',
        payload: false
    }
}

export const postCommentsNotLoaded = () => {
    return {
        type: 'POST_COMMENTS_NOT_LOADED',
        payload: true
    }
}

// searched posts

export const setSearchedPosts = (posts: Array<postInterface>) => {
    return {
        type: 'SET_SEARCHED_POSTS',
        payload: posts
    }
}

export const resetSearchedPosts = () => {
    return {
        type: 'RESET_SEARCHED_POSTS',
        payload: null
    }
}

// searched posts spinner

export const searchedPostsLoaded = () => {
    return {
        type: 'SEARCHED_POSTS_LOADED',
        payload: false
    }
}

export const searchedPostsNotLoaded = () => {
    return {
        type: 'SEARCHED_POSTS_NOT_LOADED',
        payload: true
    }
}

// posts pagination

export const setPostsPagination = (n: number) => {
    return {
        type: 'SET_POSTS_PAGINATION',
        payload: n
    }
}

export const resetPostsPagination = () => {
    return {
        type: 'RESET_POSTS_PAGINATION',
        payload: 1
    }
}

// posts pagination

export const setSearchPostsPagination = (n: number) => {
    return {
        type: 'SET_SEARCH_POSTS_PAGINATION',
        payload: n
    }
}

export const resetSearchPostsPagination = () => {
    return {
        type: 'RESET_SEARCH_POSTS_PAGINATION',
        payload: 1
    }
}