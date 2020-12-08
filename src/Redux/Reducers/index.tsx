import setCommentsReducer from "./setCommentsReducer";
import setPostsReducer from "./setPostsReducer";
import {combineReducers} from 'redux';
import setPagePostsSpinnerReducer from "./setPagePostsSpinnerReducer";
import setPageCommentsSpinnerReducer from "./setPageCommentsSpinnerReducer"
import setCommentsInPostReducer from "./setCommentsInPostReducer";
import setPostCommentsSpinnerReducer from "./setPostCommentsSpinnerReducer";


const allReducers = combineReducers({
    posts: setPostsReducer,
    postsSpinner: setPagePostsSpinnerReducer,
    comments: setCommentsReducer,
    pageCommentsSpinnner: setPageCommentsSpinnerReducer,
    postComments: setCommentsInPostReducer,
    postCommentsSpinner: setPostCommentsSpinnerReducer
})

export default allReducers