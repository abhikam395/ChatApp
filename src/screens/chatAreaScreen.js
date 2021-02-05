import React, { Component } from 'react';
import './chatarea.scss';

import { fetchChats } from './../dummyapi/chatapi';
import { connect } from 'react-redux';

import ChatAreaChat from './../components/chatAreaChat';
import MessageInputComponent from './../components/messageInputComponent';
import { Redirect } from 'react-router-dom';

const mapStateToProps = function(state){
    return {
        data: state.chatsState
    }
}

class ChatAreaScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
        }

    }

    componentDidMount(){
        let { user } = this.state;
        let { sender } = this.props.location.state;
        fetchChats(user.id, sender.id);
    }

    getChatMessages(chats){
        let { user } = this.state;
        return chats.map((chat) => {
            return <ChatAreaChat key={chat.id} chat={chat} selfId={user.id}/>
        })
    }

    render(){
        let user = localStorage.getItem('user');
        if(user == undefined || user == null)
            return <Redirect to="/login"/>

        return(
            <div className="chat-area chat-area--size">
                <div className="chat-area__container chat-area__container--size">
                    <header className="chat-area__header chat-area__header--size">
                        <img className="chat-area__image chat-area__image--size"/>
                        <h5 className="chat-area__name">{user.name}</h5>
                        <span className="chat-area__time">5min ago</span>
                    </header>
                    <ul className="chat__list chat__list--size chat__list--theme">
                        {this.getChatMessages(this.props.data.chats)}
                    </ul>
                </div>
                <MessageInputComponent/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ChatAreaScreen);