import React, { Component, Fragment } from 'react';
import './users.scss';

import NavbarComponent from './../../components/navbar/NavbarComponent';
import UserComponent from './../../components/user/UserComponent';

export default class UsersScreen extends Component{

    constructor(){
        super();
        this.state = {
            users: [
                {id: 1, name: 'Abhishek'},
                {id: 2, name: 'Rock'},
                {id: 3, name: 'Prohit'},
                {id: 4, name: 'Gaurav'},
                {id: 5, name: 'Monry'}
            ]
        }
        this.removeUser = this.removeUser.bind(this);
    }

    getUsersList(users){
        return users.map((user) => {
            return <UserComponent user={user} key={user.id} removeUser={this.removeUser}/>
        })
    }

    removeUser(id){
        // console.log(id)
        let userlist = document.getElementById('userlist');
        let userItem = userlist[0];
        console.log(userItem)
        // userlist.removeChild(userItem);
    }

    render(){
        return(
            <Fragment>
                <NavbarComponent/>
                <ul className="user-list user-list--size" id="userlist">
                    {this.getUsersList(this.state.users)}
                </ul>
            </Fragment>
        )
    }
}