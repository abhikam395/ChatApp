import { ADD_USER_INFO, REMOVE_USER_INFO, GET_TOKEN, GET_USER_INFO } from './../types';

let initialState = {
    logedIn: false,
    user: null,
    token: null,
    errors: null
}

function authReducer(state = initialState, action){
    switch (action.type){
        case ADD_USER_INFO : {
            let { data } = action;
            localStorage.setItem('user', data.user);
            localStorage.setItem('token', data.token);
            return Object.assign(state, {...data})
        }
        case REMOVE_USER_INFO: {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            return {};
        }
        case GET_USER_INFO: {
            let user = state.user != null ? 
                state.user : localStorage.getItem('user');
            return user
        } 
        case GET_TOKEN: {
            let token = state.token != null ? state.token : localStorage.getItem('token')
            return token;
        }
    }
    return state;
}

export default authReducer;