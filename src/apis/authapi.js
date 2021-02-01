import store from './../../src/store';
import { addUser } from './../../src/store/actions/auth-actions';
import axios from 'axios';

let api = 'http://localhost:3000/api/v1/auth/';

export function register({name, email, password}){
    axios.post(api + 'register', null, {
        params: {
            name: name,
            email: email,
            password: password
        }
    })
    .then(response => response.data)
    .then(response => {
        if(response.status){
            let { id, name, email } = response.data;
            store.dispatch(addUser({id: id, name: name, email: email}));
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}


export function login({email, password}){
    axios.post(api + 'login', null, {
        params: {
            email: email,
            password: password
        }
    })
    .then(response => response.data)
    .then(response => {
        console.log(response)
        if(response.status){
            let { id, name, email } = response.data;
            store.dispatch(addUser({id: id, name: name, email: email}));
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}