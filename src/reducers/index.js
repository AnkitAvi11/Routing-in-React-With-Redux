import {combineReducers} from 'redux';

import {posts, selectedPost} from './postReducers';
import {selectedUser} from './userReducers';
export default combineReducers ({
    posts,
    selectedPost,
    selectedUser
})