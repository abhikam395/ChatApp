import React, { Component } from 'react';
import './friend.scss';

export default class FriendComponent extends Component {

    constructor(props){
        super(props);
    }

    onClick(){
        let { history, friend } = this.props;
        history.push('/chat', { user: friend });
    }

    render(){
        let { friend } = this.props;

        return(
            <li className="friend friend--size friend--theme" onClick={this.onClick.bind(this)}>
                <img className="friend__image friend__image--size"/>
                <h5 className="friend__name">{friend.name}</h5>
            </li>
        )
    }
}