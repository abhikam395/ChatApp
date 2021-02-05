import store from './../../src/store';
import { addUser } from './../../src/store/actions/auth-actions';
import axios from 'axios';
import base from './../config/base.json';

export function register({name, email, password}){
    axios.post(base.url + '/auth/register', null, {
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    // .then(response => response.data)
    .then(response => {
        console.log(response)
        if(response.status){
            let { id, name, email } = response.data;
            console.log(response)
            // store.dispatch(addUser({id: id, name: name, email: email}));
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}


export function login({email, password}){
    axios.post(base.url + '/auth/login', null, {
        params: {
            email: email,
            password: password
        }
    })
    .then(response => response.data)
    .then(response => {
        console.log(1)
        if(response.status){
            let { id, name, email } = response.data;
            // store.dispatch(addUser({id: id, name: name, email: email}));
        }
    })
    .catch(function (error) {
        // handle error
        console.log(1);
    })
}