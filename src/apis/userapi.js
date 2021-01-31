import store from './../../src/store';
import { addUsers } from './../../src/store/actions/user-actions';
import axios from 'axios';

let api = 'http://localhost:3000/api/v1/users';

export async function getUsers(){
    axios.get(api)
    .then(response => response.data)
    .then(response => {
        if(response.status){
            let { users } = response.data;
            store.dispatch(addUsers(users));
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}