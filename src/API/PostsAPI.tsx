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

const fetchPosts = () => axios.get(config.apiURL + "posts")
    .then(res => {
    return res.data;
})

const fetchPostsCount = () => axios.get(config.apiURL + "posts/pages")
    .then(res => {
    return res.data;
})

const postPost = (post: postInterface) => {
    return axios.post(
        config.apiURL + "posts", 
        jsonify(post), 
        headerJsonConfiguration()
        )
    .then(res => {
        return res;
    })
    .catch((error) => {
        return error.response.data;
    })
}

const updatePost = (post: postInterface) => {
    return axios.put(
        config.apiURL + "posts", 
        jsonify(post), 
        headerJsonConfiguration()
        )
    .then(res => {
        return res;
    })
    .catch((error) => {
        return error.response.data;
    })
}

const deletePost = (postId: String) => axios.delete(config.apiURL + "posts/" + postId)
    .then(res => {
    return res.data;
})

const fetchPostsBySearchPaginated = (
    number: number, 
    givenAuthor: String, 
    givenTag: String, 
    givenContents: String) => axios.get(config.apiURL + "posts/find/page/" + number, {
    params: {
        author: givenAuthor,
        tag: givenTag,
        contents: givenContents
    }
})
    .then(res => {
    return res.data;
})

const fetchPostsPaginated = (number: number) => axios.get(config.apiURL + "posts/page/" + number)
    .then(res => {
    return res.data;
})

export const PostsAPI = {
    fetchPosts: fetchPosts,
    fetchPostsCount: fetchPostsCount,
    deletePost: deletePost,
    postPost: postPost,
    updatePost: updatePost,
    fetchPostsPaginated: fetchPostsPaginated,
    fetchPostsBySearchPaginated: fetchPostsBySearchPaginated
};