import setCommentsReducer from "./setCommentsReducer";
import setPostsReducer from "./setPostsReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    setComments: setCommentsReducer,
    setPosts: setPostsReducer
})

export default allReducers