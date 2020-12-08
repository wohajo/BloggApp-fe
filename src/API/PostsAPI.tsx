import axios from 'axios';
import {postInterface} from '../Interfaces/interfaces'
import config from '../appConfig.json'

const jsonify = (post: postInterface) => {
    return JSON.stringify({
        id: post.id,
        authors: post.authors,
        contents: post.contents,
        tags: post.tags
    })
}

const headerJsonConfiguration = () => {
    return {
        headers: {
            'content-type': 'application/json'
        }
    }
}

const fetchPosts = () => axios.get(config.apiURL + "/posts")
    .then(res => {
    return res.data;
})

const postPost = (post: postInterface) => {
    axios.post(
        config.apiURL + "/posts", 
        jsonify(post), 
        headerJsonConfiguration()
        )
    .then(res => {
    return res.data;
    })
}

const deletePost = (postId: String) => axios.delete(config.apiURL + "posts/" + postId)
    .then(res => {
    return res.data;
})

export const PostsAPI = {
    fetchPosts: fetchPosts,
    deletePost: deletePost,
    postPost: postPost
};