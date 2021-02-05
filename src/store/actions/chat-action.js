import { ADD_LAST_CHATS } from './../types';

export function addLastChats(data){
    return {
        type: ADD_LAST_CHATS,
        data: data,
    }
}  