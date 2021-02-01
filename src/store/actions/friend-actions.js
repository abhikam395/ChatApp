import { GET_FRIENDS } from './../types';

export function fetchFriends(friends){
    return {
        type: GET_FRIENDS,
        data: friends
    }
}