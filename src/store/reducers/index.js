import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import friendReducer from './friend-reducer';
import authReducer from './auth-reducer';

const reducer = {
    userState: userReducer,
    friendState: friendReducer,
    authState: authReducer
}

export default combineReducers(reducer);