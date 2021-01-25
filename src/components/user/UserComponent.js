import React, { Component } from 'react';
import './user.scss';

import { Image } from '@material-ui/icons';

import FollowButton from './../common/FollowButton';

export default class UserComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: this.props.user
        }
    }

    render(){
        return (
            <li className="user-item user-item--size user-item--theme">
                <Image className="user-image"/>
                <h3 className="user-name">{this.state.user.name}</h3>
                <FollowButton removeUser={this.props.removeUser}/>
            </li>
        )
    }
}