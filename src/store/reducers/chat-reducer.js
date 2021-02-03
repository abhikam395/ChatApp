import { POST_CHAT, ADD_CHATS } from './../types';

const initialState = {  
    chats: []
}

function chatReducer(state = initialState, action){
    switch(action.type){
        case ADD_CHATS: {
            return Object.assign({}, state, action.data);
        }
    }
    return state;
}

export default chatReducer;