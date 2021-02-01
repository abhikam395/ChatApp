import React, { Component } from 'react';
import './friends.scss';

import { connect } from 'react-redux';
import { getFriends } from './../apis/friendapi';
import FriendComponent from './../components/friendComponent';

const mapStateToProps = function(state){
    return {
        friends: state.friendState.friends,
        self: state.authState.user
    }
}

class FriendsScreen extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        let user = JSON.parse(this.props.self);
        getFriends(user.id);
    }

    getFriendsList(friends){
        return friends.map((friend) => {
            return <FriendComponent friend={friend} key={friend.id}/>
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