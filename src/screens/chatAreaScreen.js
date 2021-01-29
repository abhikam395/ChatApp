import React, { Component } from 'react';
import './chatarea.scss';

import ChatAreaChat from './../components/chatAreaChat';
import MessageInputComponent from './../components/messageInputComponent';

export default class ChatAreaScreen extends Component {

    constructor(){
        super();
        this.state = {
            chats: [
                {id: 1, message: 'Hello, how are you?', time: '10min ago'},
                {id: 2, message: 'Hello, how are you?', time: '10min ago'},
                {id: 3, message: 'Hello, how are you?', time: '10min ago'},
                {id: 4, message: 'Hello, how are you?', time: '10min ago'},
                {id: 5, message: 'Hello, how are you?', time: '10min ago'},
                {id: 6, message: 'Hello, how are you?', time: '10min ago'},
                {id: 7, message: 'Hello, how are you?', time: '10min ago'},
                {id: 8, message: 'Hello, how are you?', time: '10min ago'},
                {id: 9, message: 'Hello, how are you?', time: '10min ago'},
                {id: 10, message: 'Hello, how are you?', time: '10min ago'},
                {id: 11, message: 'Hello, how are you?', time: '10min ago'},
                {id: 12, message: 'Hello, how are you?', time: '10min ago'},
                {id: 13, message: 'Hello, how are you?', time: '10min ago'},
                {id: 14, message: 'Hello, how are you?', time: '10min ago'},
                {id: 15, message: 'Hello, how are you?', time: '10min ago'},
                {id: 16, message: 'Hello, how are you?', time: '10min ago'},
                {id: 17, message: 'Hello, how are you?', time: '10min ago'},
                {id: 18, message: 'Hello, how are you?', time: '10min ago'},
            ]
        }
    }

    getChatMessages(chats){
        return chats.map((chat) => {
            return <ChatAreaChat key={chat.id} chat={chat}/>
        })
    }

    render(){
        return(
            <div className="chat-area chat-area--size">
                <div className="chat-area__container chat-area__container--size">
                    <header className="chat-area__header chat-area__header--size">
                        <img className="chat-area__image chat-area__image--size"/>
                        <h5 className="chat-area__name">Abhishek</h5>
                        <span className="chat-area__time">5min ago</span>
                    </header>
                    <ul className="chat__list chat__list--size chat__list--theme">
                        {this.getChatMessages(this.state.chats)}
                    </ul>
                </div>
                <MessageInputComponent/>
            </div>
        )
    }
}