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