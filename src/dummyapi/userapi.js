import base from './../config/base.json';

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

export function fetchUsers(token, userId){ 
    return fetch(base.url + `/users/${userId}`, {
        query: {
            id: userId
        }
    })
        .then(res => res.json());
}