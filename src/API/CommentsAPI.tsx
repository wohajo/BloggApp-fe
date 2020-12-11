import axios from 'axios';
import {commentInterface} from '../Interfaces/interfaces'
import config from '../appConfig.json'

const jsonify = (comment: commentInterface) => {
    return JSON.stringify({
        id: comment.id,
        username: comment.username,
        postId: comment.postId,
        contents: comment.contents
    })
}

const headerJsonConfiguration = () => {
    return {
        headers: {
            'content-type': 'application/json'
        }
    }
}

const fetchComments = () => axios.get(config.apiURL + "comments")
    .then(res => {
    return res.data;
})

const fetchCommentByCommentId = (commentId: String) => axios.get(config.apiURL + "comments/" + commentId)
    .then(res => {
    return res.data;
})

const fetchCommentsByPostId = (postId: String) => axios.get(config.apiURL + "posts/" + postId + "/comments")
    .then(res => {
    return res.data;
})

const fetchCommentsByUsername = (username: String) => axios.get(config.apiURL + "comments/user/" + username)
    .then(res => {
    return res.data;
})

const postComentInPost = (comment: commentInterface) => {
    return axios.post(
        config.apiURL + "/comments", 
        jsonify(comment), 
        headerJsonConfiguration()
        )
    .then(res => {
        return res;
    })
    .catch((error) => {
        return error.response.data;
    })
}

const putComentInPost = (comment: commentInterface) => {
    return axios.put(
        config.apiURL + "/comments", 
        jsonify(comment), 
        headerJsonConfiguration()
        )
    .then(res => {
        return res;
    })
    .catch((error) => {
        return error.response.data;
    })
}

const deleteComment = (commentId: String) => axios.delete(config.apiURL + "comments/" + commentId)
    .then(res => {
    return res.data;
})

const deleteCommentsByPostId = (postId: String) => axios.delete(config.apiURL + "posts/" + postId + "/comments")
    .then(res => {
    return res.data;
})

export const CommentsAPI = {
    fetchComments: fetchComments,
    fetchCommentsByPostId: fetchCommentsByPostId,
    fetchCommentByCommentId: fetchCommentByCommentId,
    postComentInPost: postComentInPost,
    putComentInPost: putComentInPost,
    deleteComment: deleteComment,
    fetchCommentsByUsername: fetchCommentsByUsername,
    deleteCommentsByPostId: deleteCommentsByPostId
};