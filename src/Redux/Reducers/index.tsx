import setCommentsReducer from "./setCommentsReducer";
import setPostsReducer from "./setPostsReducer";
import {combineReducers} from 'redux';
import setPostsSpinnerReducer from "./setPostsSpinnerReducer";
import setPageCommentsSpinnerReducer from "./setPageCommentsSpinnerReducer"

const allReducers = combineReducers({
    comments: setCommentsReducer,
    posts: setPostsReducer,
    postsSpinner: setPostsSpinnerReducer,
    pageCommentsSpinnner: setPageCommentsSpinnerReducer
})

export default allReducers