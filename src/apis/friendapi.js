import axios from 'axios';
import { fetchFriends } from '../store/actions/friend-actions';
import store from './../store';

let api = 'http://localhost:3000/api/v1/';

export function followUser(followerId, followeeId){
    console.log(followerId)
    console.log(followeeId)
    return axios.post(api + 'follow', null, {
        params: {
            followerId: followerId,
            followeeId: followeeId
        }
    }).then(response => response.data);
}

//get friends
export function getFriends(id){
    return axios.get(api + 'friends', {
        params: {
            id: id
        }
    })
    .then(response => response.data)
    .then(response => {
        if(response.status){
            let { friends } = response.data;
            store.dispatch(fetchFriends(friends));
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

