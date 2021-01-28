import React, { Component } from 'react';
import './recentchat.scss';

import ChatComponent from './../components/chatComponent';

export default class RecentChatScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            chats: [
                {id: 1, name: 'Rahul', lastmessage: 'Hello, How are you?', timestamp: '10 mins ago'},
                {id: 2, name: 'Rahul', lastmessage: 'Hello, How are you?', timestamp: '10 mins ago'},
                {id: 3, name: 'Rahul', lastmessage: 'Hello, How are you?', timestamp: '10 mins ago'},
                {id: 4, name: 'Rahul', lastmessage: 'Hello, How are you?', timestamp: '10 mins ago'},
                {id: 5, name: 'Rahul', lastmessage: 'The box-shadow property enables you to cast a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow, the box shadow takes on the same rounded corners. The z-ordering of multiple box shadows is the same as multiple text shadows (the first specified shadow is on top).', timestamp: '10 mins ago'},
            ]
        }
    }

    getRecentChats(chats){
        return chats.map((chat) => {
            return <ChatComponent chat={chat} key={chat.id} {...this.props}/>
        })
    }

    render(){
        return( 
            <ul className="recent-chats recent-chats--size">
                {this.getRecentChats(this.state.chats)}
            </ul>
        )
    }
}