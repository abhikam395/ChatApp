import React, { Component } from 'react';
import './chatarea.scss';

export default class ChatAreaScreen extends Component {

    constructor(){
        super();
        this.state = {
            chats: [
                {}
            ]
        }
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
                    <ul className="chat__list chat__list--size">

                    </ul>
                </div>
            </div>
        )
    }
}