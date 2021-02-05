import React, { Component } from 'react';
import './addfriend.scss';

import SearchbarComponent from './../components/searchbarComponent';
import UserComponent from './../components/userComponent';

import { connect } from 'react-redux';
import { fetchUsers } from './../dummyapi/userapi';

const mapStateToProps = (state) => {
    return {
        users: state.userState.users
    };
}

class AddFriendScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            users: this.props.users
        }
    }

    componentDidMount(){
        let { token } = this.state;
        fetchUsers(token);
    }

    getUserList(users){
        if(!users.length)
            return <div>Users not found</div>
        return users.map((user) => {
            return <UserComponent key={user.id} user={user}/>
        })
    }

    queryListener(event){
        let value = event.target.value;
        this.updateListOnSearch(value.toLowerCase())
    }

    updateListOnSearch(word){
        let { users } = this.props;
        if(word.length == 0){
            this.setState({users: users});
            return;
        }

        let list = users.filter(function(user){
            let name = user.name.toLowerCase();
            if(name.startsWith(word))
                return user;
        })
        this.setState({ users: list})
    }

    render(){
        return(
            <div className="add-friend add-friend--size">
                <div className="add-friend__searchbar add-friend__searchbar--size">
                    <SearchbarComponent 
                        queryListener={this.queryListener.bind(this)}/>
                </div>
                <ul className="user__list user__list--size">
                    {this.getUserList(this.state.users)}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(AddFriendScreen);