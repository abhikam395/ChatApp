import store from './../store';
import { addLastChats } from './../store/actions/chat-action';

const lastChats = [
    {groupId: 1, sender: { id: 1, name: 'Rohit', profile: ''}, message: 'Its rohit', time: '1 minutes ago'},
    {groupId: 2, sender: { id: 1, name: 'John', profile: ''}, message: 'Its john', time: '7 minutes ago'},
    {groupId: 3, sender: { id: 1, name: 'Obama', profile: ''}, message: 'Its obama', time: '6 minutes ago'},
    {groupId: 4, sender: { id: 5, name: 'Ortan', profile: ''}, message: 'Its ortan', time: '5 minutes ago'},
    {groupId: 5, sender: { id: 4, name: 'Bhisma', profile: ''}, message: 'Its bhisma', time: '4 minutes ago'},
    {groupId: 6, sender: { id: 2, name: 'Khan', profile: ''}, message: 'Its khan', time: '2 minutes ago'},
];

const response = {
    status: 'ok',
    message: 'Last chats fetched',
    chats: lastChats
}

export function fetchLastChats(userId){
    let { status, message, chats, errors } = response;
    if(status){
        store.dispatch(addLastChats({status: true, message: message, lastChats: chats}));
    }
    else{
        store.dispatch(addLastChats({status: false, errors: errors}));
    }
}

