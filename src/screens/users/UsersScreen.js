import React, { Component, Fragment } from 'react';
import './users.scss';

import NavbarComponent from './../../components/navbar/NavbarComponent';
import UserComponent from './../../components/user/UserComponent';

export default class UsersScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: [
                {id: 1, name: 'Abhishek'},
                {id: 2, name: 'Rock'},
                {id: 3, name: 'Prohit'},
                {id: 4, name: 'Gaurav'},
                {id: 5, name: 'Monry'}
            ]
        }
    }

    getUsersList(users){
        return users.map((user) => {
            return <UserComponent user={user} key={user.id}/>
        })
    }

    render(){
        return(
            <Fragment>
                <NavbarComponent {...this.props}/>
                <ul className="user-list user-list--size" id="userlist">
                    {this.getUsersList(this.state.users)}
                </ul>
            </Fragment>
        )
    }
}