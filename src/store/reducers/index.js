import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import friendReducer from './friend-reducer';
import authReducer from './auth-reducer';
import lastChatReducer from './lastchat-reducer';
import chatReducer from './chat-reducer';

const reducer = {
    userState: userReducer,
    friendState: friendReducer,
    authState: authReducer,
    lastChatsState: lastChatReducer,
    chatsState: chatReducer
}

export default combineReducers(reducer);