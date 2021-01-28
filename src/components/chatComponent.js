import React, { Component } from 'react';
import './chat.scss';

export default class ChatComponent extends Component{

    render(){
        let { chat } = this.props;
        return(
            <li className="chat chat--size chat--theme" key={chat.id}>
                <img class="chat__image chat__image--size"/>
                <div class="chat__info">
                    <h4 class="chat__user">{chat.name}</h4>
                    <p class="chat__message">{chat.lastmessage}</p>
                </div>
                <span class="chat__time">{chat.timestamp}</span>
            </li>
        )
    }
}