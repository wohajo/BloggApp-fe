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

const fetchCommentsByPostId = (postId: String) => axios.get(config.apiURL + "post/" + postId + "/comments")
    .then(res => {
    return res.data;
})

const postComentInPost = (comment: commentInterface) => {
    axios.post(
        config.apiURL + "/comments", 
        jsonify(comment), 
        headerJsonConfiguration()
        )
    .then(res => {
    return res.data;
    })
}

const putComentInPost = (comment: commentInterface) => {
    axios.put(
        config.apiURL + "/comments", 
        jsonify(comment), 
        headerJsonConfiguration()
        )
    .then(res => {
    return res.data;
    })
}

const deleteComent = (commentId: String) => axios.delete(config.apiURL + "comments/" + commentId)
    .then(res => {
    return res.data;
})

export const CommentsAPI = {
    fetchComments: fetchComments,
    fetchCommentsByPostId: fetchCommentsByPostId,
    fetchCommentByCommentId: fetchCommentByCommentId,
    postComentInPost: postComentInPost,
    putComentInPost: putComentInPost,
    deleteComent: deleteComent
};