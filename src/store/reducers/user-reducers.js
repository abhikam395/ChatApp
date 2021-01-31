import { GET_USERS, ADD_USERS } from './../types';

const initialState = {
    users: []
}

function userReducer(state = initialState, action){
    switch (action.type){
        case GET_USERS: {
            return state.users;
        }
        case ADD_USERS: {
            return action.data;
        }
    }
    return state;
}

export default userReducer;
