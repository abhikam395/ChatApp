import { ADD_CHATS, POST_CHAT } from './../types';

export function addChats(chats){
    return {
        type: ADD_CHATS,
        data: {
            chats: chats,
        }
    }
}  