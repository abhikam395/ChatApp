import React, { Component } from 'react';
import './chatarea.scss';

import { getChats } from './../apis/chatapi';
import { connect } from 'react-redux';

import ChatAreaChat from './../components/chatAreaChat';
import MessageInputComponent from './../components/messageInputComponent';

const mapStateToProps = function(state){
    return {
        chats: state.chatState.chats
    }
}

class ChatAreaScreen extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let { user } = this.props.location.state;
        let { id } = JSON.parse(localStorage.getItem('user'));
        getChats(id, user.id);
    }

    getChatMessages(chats){
        return chats.map((chat, index) => {
            return <ChatAreaChat key={index} chat={chat}/>
        })
    }

    render(){
        let { user } = this.props.location.state;

        return(
            <div className="chat-area chat-area--size">
                <div className="chat-area__container chat-area__container--size">
                    <header className="chat-area__header chat-area__header--size">
                        <img className="chat-area__image chat-area__image--size"/>
                        <h5 className="chat-area__name">{user.name}</h5>
                        <span className="chat-area__time">5min ago</span>
                    </header>
                    <ul className="chat__list chat__list--size chat__list--theme">
                        {this.getChatMessages(this.props.chats)}
                    </ul>
                </div>
                <MessageInputComponent/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ChatAreaScreen);