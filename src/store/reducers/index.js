import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import friendReducer from './friend-reducer';
import authReducer from './auth-reducer';
import chatReducer from './chat-reducer';

const reducer = {
    userState: userReducer,
    friendState: friendReducer,
    authState: authReducer,
    chatState: chatReducer
}

export default combineReducers(reducer);