import {combineReducers} from 'redux';
import setPostsReducer from "./Posts/setPostsReducer";
import setPagePostsSpinnerReducer from "./Posts/setPagePostsSpinnerReducer";
import setCommentsReducer from "./Comments/setCommentsReducer";
import setPageCommentsSpinnerReducer from "./Comments/setPageCommentsSpinnerReducer";
import setCommentsInPostReducer from "./CommentsInPost/setCommentsInPostReducer";
import setPostCommentsSpinnerReducer from "./CommentsInPost/setPostCommentsSpinnerReducer";
import setSearchedPostsReducer from "./SearchedPosts/setSearchedPostsReducer";
import setSearchedPostsSpinnerReducer from "./SearchedPosts/setSearchedPostsSpinnerReducer";

const allReducers = combineReducers({
    posts: setPostsReducer,
    postsSpinner: setPagePostsSpinnerReducer,
    comments: setCommentsReducer,
    pageCommentsSpinnner: setPageCommentsSpinnerReducer,
    postComments: setCommentsInPostReducer,
    postCommentsSpinner: setPostCommentsSpinnerReducer,
    searchedPosts: setSearchedPostsReducer,
    searchedPostsSpinner: setSearchedPostsSpinnerReducer,
})

export default allReducers