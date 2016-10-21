/**
 * Created by matthew.jones on 10/21/2016.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments';
import posts from './posts';

const rootReducer = combineReducers( {
    posts,
    comments,
    router: routerReducer,
});

export default routerReducer;