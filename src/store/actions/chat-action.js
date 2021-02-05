import { ADD_CHATS, ADD_GROUP_CHATS, ADD_LAST_CHATS } from './../types';

export function addLastChats(data){
    return {
        type: ADD_LAST_CHATS,
        data: data,
    }
}  

export function addChats(data){
    return {
        type: ADD_GROUP_CHATS,
        data: data
    }
}