import React, { Component } from 'react';
import './addfriend.scss';

import SearchbarComponent from './../components/searchbarComponent';
import UserComponent from './../components/userComponent';

export default class AddFriendScreen extends Component{

    constructor(){
        super();
        this.state = {
            users: [
                {id: 1, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 2, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 3, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 4, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 5, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 6, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 7, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 8, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 9, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 10, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 11, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 12, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 13, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 14, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 15, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 16, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 17, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
                {id: 18, name: 'Rohan', location: 'Dehradun, Uttrakhand'},
            ]
        }
    }

    getUserList(users){
        return users.map((user) => {
            return <UserComponent key={user.id} user={user}/>
        })
    }

    render(){
        return(
            <div className="add-friend add-friend--size">
                <div className="add-friend__searchbar add-friend__searchbar--size">
                    <SearchbarComponent/>
                </div>
                <ul className="user__list user__list--size">
                    {this.getUserList(this.state.users)}
                </ul>
            </div>
        )
    }
}