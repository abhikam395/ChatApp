import React, { Component } from 'react';
import './onlineFriend.scss';

import { connect } from 'react-redux';
import { fetchOnlineFriendList } from './../dummyapi/friendsapi';
import OnlineuserComponent from './../components/onlineUserComponent';

const mapStateToProps = function(state){
    return {
        friends: state.onlineFriendsState.friends
    }
}

class OnlineFriendScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: localStorage.getItem('user')
        }
    }

    componentDidMount() {
        let user = JSON.parse(this.state.user);
        fetchOnlineFriendList(user.id);
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
                    {this.getOnlineUsers(this.props.friends)}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(OnlineFriendScreen);