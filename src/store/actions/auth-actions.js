import { ADD_USER_INFO, GET_USER_INFO, REMOVE_USER_INFO } from './../types';

export function addUserInfo(user){
    console.log('addUserInfo')
    return {
        type: ADD_USER_INFO,
        data: user
    }
}

export function removeUserInfo(){
    return {
        type: REMOVE_USER_INFO,
        data: user
    }
}

export function getUserInfo(){
    // return {
    //     type: GET_USER_INFO,

    // }
}