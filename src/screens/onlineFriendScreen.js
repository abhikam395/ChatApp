import React, { Component } from 'react';
import './onlineFriend.scss';

import OnlineuserComponent from './../components/onlineUserComponent';

export default class OnlineFriendScreen extends Component{

    constructor(){
        super();
        this.state = {
            users: [
                {id: 1, name: 'Abhishek'},
                {id: 2, name: 'Ayush'},
                {id: 3, name: 'Abhay'},
                {id: 4, name: 'Prashand'},
                {id: 5, name: 'Aman'},
                {id: 6, name: 'Akash'},
                {id: 7, name: 'Shivansh'}
            ]
        }
    }

    getOnlineUsers(users){
        return users.map((user) => {
            return <OnlineuserComponent key={user.id} user={user}/>
        })
    }

    render(){
        return(
            <div className="online online--size">
                <ul className="online__user online__user--size">
                    {this.getOnlineUsers(this.state.users)}
                </ul>
            </div>
        )
    }
}