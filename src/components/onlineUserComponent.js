import React, { Component } from 'react';
import './onlineuser.scss';

export default class OnlineuserComponent extends Component {

    render(){
        let { user } = this.props;

        return(
            <li className="online-user online-user--size">
                <img className="online-user__image online-user__image--size"/>
                <h5 className="online-user__name">{user.name}</h5>
            </li>
        )
    }
}