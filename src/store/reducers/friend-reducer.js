import { GET_FRIENDS } from '../types';

const initialState = {
    friends: []
}

function friendReducer(state = initialState, action){
    switch (action.type){
        case GET_FRIENDS: {
            return Object.assign({}, state, {friends: action.data});
        }
    }
    return state;
}

export default friendReducer;