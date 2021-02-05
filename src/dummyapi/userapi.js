import store from './../store';
import { addUsers } from './../store/actions/user-actions';

const users = [
    {id: 1, name: 'Gurpreet'},
    {id: 2, name: 'Rohan'},
    {id: 3, name: 'Aman'},
    {id: 4, name: 'Kishan'},
    {id: 5, name: 'Jhonny'},
    {id: 6, name: 'Harpreet'},
];

const response = {
    status: 'ok',
    message: 'Users fetched',
    users: users,
};

export function fetchUsers(token){
    let { status } = response;
    if(status == 'ok')
        store.dispatch(addUsers(response))
    else
        store.dispatch(addUsers({status: 'error', errors: []}))
}