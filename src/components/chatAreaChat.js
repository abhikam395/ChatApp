import React, { Component } from 'react';
import './chatareachat.scss';

export default class ChatAreaChat extends Component {

    getChat(chat){
        if(chat.id % 2 == 0){
            return (
                <div className="chat-area__receive chat-area__receive--size">
                    {chat.message}
                </div>
            )
        }
        else{
            return (
                <div className="chat-area__send chat-area__send--size">
                    {chat.message}
                </div>
            )
        }
    }

    render(){
        let { chat } = this.props;

        return(
            <li className="chat-area__chat chat-area__chat--size">
                {this.getChat(chat)}
            </li>
        )
    }
}