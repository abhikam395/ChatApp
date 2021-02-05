import { ADD_USER_INFO, REMOVE_USER_INFO, GET_TOKEN, GET_USER_INFO } from './../types';

let initialState = {
    status: false,
    user: null,
    token: null,
    message: null,
    errors: null
}

function authReducer(state = initialState, action){
    switch (action.type){
        case ADD_USER_INFO : {
            let { user, token } = action.data;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            return Object.assign({}, state, {...action.data})
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