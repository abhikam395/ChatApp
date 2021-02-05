import { ADD_LAST_CHATS, ADD_NEW_LAST_CHAT } from './../types';

const initialState = {  
    status: false,
    message: null,
    lastChats: [],
    errors: []
}

function chatReducer(state = initialState, action){
    switch(action.type){
        case ADD_LAST_CHATS: {
            return Object.assign({}, state, {...action.data});
        }
    }
    return state;
}

export default chatReducer;