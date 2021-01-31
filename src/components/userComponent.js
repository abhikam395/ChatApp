import React, { Component} from 'react';
import './user.scss';

export default class UserComponent extends Component {

    render(){
        let { user } = this.props;

        return(
            <li className="user user--size">
                <img className="user__image user__image--size"/>
                <h4 className="user__name">{user.name}</h4>
                <button className="button">FOLLOW</button>
            </li>
        )
    }
}