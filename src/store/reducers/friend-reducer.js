import { ADD_FRIEND_LIST, ADD_ONLINE_FRIENDS } from '../types';

const initialFriendsState = {
    status: false,
    message: null,
    friends: [],
    errors: []
}

const initialOnlineFriendsState = {
    status: false,
    message: null,
    friends: [],
    error: []
}

function friendReducer(state = initialFriendsState, action){
    switch (action.type){
        case ADD_FRIEND_LIST: {
            return Object.assign({}, state, {...action.data});
        }
    }
    return state;
}

function onlineFriendReduer(state = initialOnlineFriendsState, action){
    switch (action.type){
        case ADD_ONLINE_FRIENDS: {
            return Object.assign({}, state, {...action.data})
        }
    }
    return state;
}

export default {friendsState :friendReducer, onlineFriendsState: onlineFriendReduer};