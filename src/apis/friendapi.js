import axios from 'axios';

let api = 'http://localhost:3000/api/v1/follow';

export function followUser(followerId, followeeId){
    console.log(followerId + ' ' + followeeId);
    return axios.post(api, null, {
        params: {
            followerId: followerId,
            followeeId: followeeId
    }}).then(response => response.data);
}

