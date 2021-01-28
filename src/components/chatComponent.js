import React, { Component } from 'react';
import './chat.scss';

export default class ChatComponent extends Component{

    constructor(){
        super();
    }

    openChatScreen(){
        let { history } = this.props;
        history.push('/chat');
    }

    render(){
        let { chat } = this.props;
        return(
            <li className="chat chat--size chat--theme" key={chat.id} 
                onClick={this.openChatScreen.bind(this)}>
                <img className="chat__image chat__image--size"/>
                <div className="chat__info">
                    <h4 className="chat__user">{chat.name}</h4>
                    <p className="chat__message">{chat.lastmessage}</p>
                </div>
                <span className="chat__time">{chat.timestamp}</span>
            </li>
        )
    }
}