import React, { Component } from 'react';
import './addfriend.scss';

import SearchbarComponent from './../components/searchbarComponent';
import UserComponent from './../components/userComponent';

import { connect } from 'react-redux';
import { getUsers } from './../apis/userapi';

const mapStateToProps = (state) => {
    return {
        users: state.userState.users
    };
}

class AddFriendScreen extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        getUsers();
    }

    getUserList(users){
        if(!users.length)
            return <div>Users not found</div>
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
                    {this.getUserList(this.props.users)}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AddFriendScreen);