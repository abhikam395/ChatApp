import React, { Component } from 'react';
import './chatareachat.scss';

export default class ChatAreaChat extends Component {

    getChat(chat){
        if(chat.id % 3 == 0){
            return (
                <div className="chat-area__receive chat-area__receive--size">
                    <p className="chat-area__message">{chat.message}</p>
                    <span className="chat-area__time">{chat.time}</span>
                </div>
            )
        }
        else{
            return (
                <div className="chat-area__send chat-area__send--size">
                    <p className="chat-area__message">{chat.message}</p>
                    <span className="chat-area__message-time">{chat.time}</span>

                </div>
            )
        }
    }

    render(){
        let { chat } = this.props;
        console.log(chat)

        return(
            <li className="chat-area__chat chat-area__chat--size">
                {this.getChat(chat)}
            </li>
        )
    }
}