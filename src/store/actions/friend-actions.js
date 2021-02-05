import { ADD_FRIEND_LIST, ADD_ONLINE_FRIENDS } from './../types';

export function addFriendList(data){
    return {
        type: ADD_FRIEND_LIST,
        data: data
    }
}

export function addOnlineFriends(data){
    return {
        type: ADD_ONLINE_FRIENDS,
        data: data
    }
}