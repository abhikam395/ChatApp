import { ADD_USER, REMOVE_USER } from './../types';

export function addUser(user){
    return {
        type: ADD_USER,
        data: user
    }
}

export function removeUser(){
    return {
        type: REMOVE_USER,
        data: user
    }
}