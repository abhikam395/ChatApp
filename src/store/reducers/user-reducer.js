import { ADD_USERS } from '../types';

const initialState = {
    status: false,
    message: '',
    users: [],
    errors: []
}

function userReducer(state = initialState, action){
    switch (action.type){
        case ADD_USERS: {
            return Object.assign({}, state, {...action.data});
        }
    }
    return state;
}

export default userReducer;
