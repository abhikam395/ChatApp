import axios from 'axios';
import base from './../config/base.json';

function registerRequest(user){
   let query = `name=${user.name}&email=${user.email}&password=${user.password}` 
   return axios.post(base.url + '/auth/register?' + query);
}

function loginRequest(user){
}

export function register(userCredential){
    let query = `name=${userCredential.name}&email=${userCredential.email}&password=${userCredential.password}` 
    return fetch(base.url + '/auth/register?' + query, { method: 'POST' })
        .then(res => res.json());
}

export function login(userCredential){
    let query = `email=${userCredential.email}&password=${userCredential.password}` 
    return fetch(base.url + '/auth/login?' + query, { method: 'POST' })
        .then(res => res.json());
}