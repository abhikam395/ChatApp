let url = "http://localhost:3000/api/v1/chats";
import store from './../store';
import axios from 'axios';

import { addChats } from './../store/actions/chat-action';

export function getChats(senderId ,receiverId){
    console.log(senderId + ' ' + receiverId)
    axios.get(url, {
        params: {
            senderId: senderId,
            receiverId: receiverId
        }
    })
    .then(response => response.data)
    .then(response => {
        console.log(response)
        if(response.status){
            let { chats } = response.data;
            console.log(response)
            store.dispatch(addChats(chats))
        }
    })
    .catch(err => {
        console.log(err);
    })
}