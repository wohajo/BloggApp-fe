import axios from 'axios';
import {postInterface} from '../Interfaces/interfaces'
import config from '../appConfig.json'


const fetchPosts = () => axios.get(config.apiURL + "/posts")
    .then(res => {
    return res.data;
})

export const PostsAPI = {
    fetchPosts: fetchPosts
};