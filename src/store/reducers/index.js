import { combineReducers } from 'redux';

import userReducer from './user-reducers';

const reducer = {
    userState: userReducer
}

export default combineReducers(reducer);