import React, { Component } from 'react';
import './friend.scss';

export default class FriendComponent extends Component {

    render(){
        let { friend } = this.props;

        return(
            <li class="friend friend--size friend--theme">
                <img class="friend__image friend__image--size"/>
                <h5 class="friend__name">{friend.name}</h5>
            </li>
        )
    }
}