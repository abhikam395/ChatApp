import { ADD_USER, REMOVE_USER } from './../types';

const initialState = {
    user: window.localStorage.getItem('user') ? window.localStorage.getItem('user') : null
}

function authReducer(state = initialState, action){
    switch (action.type){
        case ADD_USER : {
            let { data } = action;
            window.localStorage.setItem('user', JSON.stringify(data));
            return Object.assign(state, {user: data})
        }
        case REMOVE_USER: {
            window.localStorage.removeItem('user');
            return {};
        }
    }
    return state;
}

export default authReducer;