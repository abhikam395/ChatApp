import { ADD_GROUP_CHATS } from './../types';

const initialState = {
    status: false,
    message: null,
    chats: [],
    errors: []
}

function chatReducer(state = initialState, action){
    switch(action.type){
        case ADD_GROUP_CHATS: {
            return Object.assign({}, state, {...action.data})
        }
    }
    return state;
}

export default chatReducer;