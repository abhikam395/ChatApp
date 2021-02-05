import { ADD_USERS, GET_USERS } from './../types/index';

export function addUsers(data){
    return {
        type: ADD_USERS,
        data: data
    }
}
