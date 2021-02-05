import store from './../store';
import { addOnlineFriends, addFriendList } from './../store/actions/friend-actions';

const friends = [
    {id: 1, name: 'John', profile: ''},
    {id: 2, name: 'Sanu', profile: ''},
    {id: 3, name: 'Rohit', profile: ''},
    {id: 4, name: 'Shiv', profile: ''},
    {id: 5, name: 'Shiva', profile: ''},
    {id: 6, name: 'Ronak', profile: ''},
]

const response = {
    status: 'ok',
    message: 'Friends data fetched',
    friends: friends,
}

export function fetchFriendList(userId){
    let { status } = response;
    if(status == 'ok'){
        store.dispatch(addFriendList(response));
    }
    else{
        store.dispatch(addFriendList({status: 'error', error: [] }));
    }
}

export function fetchOnlineFriendList(user){
    let { status } = response;
    if(status == 'ok'){
        store.dispatch(addOnlineFriends(response));
    }
    else{
        store.dispatch(addOnlineFriends({status: 'error', error: [] }));
    }
}