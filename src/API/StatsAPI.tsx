import axios from 'axios';
import config from '../appConfig.json'

const fetchBestUsers = () => axios.get(config.apiURL + "statistics/best-users")
.then(res => {
return res.data;
})

const fetchLongestPosts = () => axios.get(config.apiURL + "statistics/longest-posts")
.then(res => {
return res.data;
})

const fetchBestPosts = () => axios.get(config.apiURL + "statistics/best-posts")
.then(res => {
return res.data;
})

export const StatsAPI = {
    fetchBestUsers: fetchBestUsers,
    fetchLongestPosts: fetchLongestPosts,
    fetchBestPosts: fetchBestPosts
};