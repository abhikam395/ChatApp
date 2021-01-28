import React, { Component } from 'react';
import './friends.scss';

import FriendComponent from './../components/friendComponent';

export default class FriendsScreen extends Component{

    constructor(){
        super();
        this.state = {
            friends: [
                {id: 1, name: 'Rahul'},
                {id: 2, name: 'Rahul'},
                {id: 3, name: 'Rahul'},
                {id: 4, name: 'Rahul'},
                {id: 5, name: 'Rahul'},
                {id: 6, name: 'Rahul'},
                {id: 7, name: 'Rahul'},
                {id: 8, name: 'Rahul'},
                {id: 9, name: 'Rahul'},
                {id: 10, name: 'Rahul'},
                {id: 11, name: 'Rahul'},
                {id: 12, name: 'Rahul'},
                {id: 13, name: 'Rahul'},
                {id: 14, name: 'Rahul'},
                {id: 15, name: 'Rahul'},
                {id: 16, name: 'Rahul'}
            ]
        }
    }

    getFriendsList(friends){
        return friends.map((friend) => {
            return <FriendComponent friend={friend}/>
        })
    }

    render(){
        return(
            <div class="friends friends--size">
                <ul className="friends__list friends__list--size">
                    { this.getFriendsList(this.state.friends) }
                </ul>
            </div>
        )
    }
}