import { addChats } from './../store/actions/chat-action';
import store from './../store';

const chats = [
    {id: 1, sender: {id: 1, name: 'Sanu'}, message: 'Hello world', time: '5 min ago'},
    {id: 2, sender: {id: 2, name: 'Abhishek'}, message: ' world', time: '5 min ago'},
    {id: 3, sender: {id: 1, name: 'Sanu'}, message: 'sdfsdf world', time: '5 min ago'},
    {id: 4, sender: {id: 2, name: 'Abhishek'}, message: 'df sdfsdfsdf', time: '5 min ago'},
    {id: 5, sender: {id: 1, name: 'Sanu'}, message: 'Hello sfsdf', time: '5 min ago'},
    {id: 6, sender: {id: 1, name: 'Sanu'}, message: 'Hello world', time: '5 min ago'},
]

const response = {
    status: 'ok',
    message: 'Chat fetched',
    chats: chats
}

export function fetchChats(fromId, toId){
    let { status } = response;
    console.log(status)
    if(status == 'ok')
        store.dispatch(addChats(response))
    else
        store.dispatch(addChats(response))
}