import React, { Component } from 'react';
import './chatareachat.scss';

export default class ChatAreaChat extends Component {

    constructor(props){
        super(props);
    }

    getChat(chat, selfId){
        let { sender } = chat;
        if(sender.id != selfId){
            return (
                <div className="chat-area__left chat-area__left--size">
                    <p className="chat-area__message">{chat.message}</p>
                    <span className="chat-area__time">{chat.time}</span>
                </div>
            )
        }
        else{
            return (
                <div className="chat-area__right chat-area__right--size">
                    <p className="chat-area__message">{chat.message}</p>
                    <span className="chat-area__message-time">{chat.time}</span>
                </div>
            )
        }
    }

    render(){
        let { chat, selfId } = this.props;

        return(
            <li className="chat-area__chat chat-area__chat--size">
                {this.getChat(chat, selfId)}
            </li>
        )
    }
}