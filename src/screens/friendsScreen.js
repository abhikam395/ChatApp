import React, { Component } from 'react';
import './friends.scss';

import { connect } from 'react-redux';
import { fetchFriendList } from './../dummyapi/friendsapi';
import FriendComponent from './../components/friendComponent';

const mapStateToProps = function(state){
    return {
        friends: state.friendsState.friends
    }
}

class FriendsScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: localStorage.getItem('user')
        }
    }

    componentDidMount(){
        let user = JSON.parse(this.state.user);
        fetchFriendList(user.id)
    }

    getFriendsList(friends){
        return friends.map((friend) => {
            return <FriendComponent friend={friend} key={friend.id} {...this.props}/>
        })
    }

    render(){
        return(
            <div className="friends friends--size">
                <ul className="friends__list friends__list--size">
                    { this.getFriendsList(this.props.friends) }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FriendsScreen);