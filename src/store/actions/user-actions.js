import { ADD_USERS, GET_USERS } from './../types/index';

export function addUsers(users){
    return {
        type: ADD_USERS,
        data: {
            users: users
        },
    }
}

export function getUsers(){
    return {
        type: GET_USERS
    }
}