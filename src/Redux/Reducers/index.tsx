import setCommentsReducer from "./setCommentsReducer";
import setPostsReducer from "./setPostsReducer";
import {combineReducers} from 'redux';
import setPostsSpinnerReducer from "./setPostsSpinnerReducer";

const allReducers = combineReducers({
    comments: setCommentsReducer,
    posts: setPostsReducer,
    postsSpinner: setPostsSpinnerReducer
})

export default allReducers