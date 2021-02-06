import React, { Component } from 'react';
import './friends.scss';

import { addFriendList } from './../store/actions/friend-actions';

import { connect } from 'react-redux';
import { getFriendList } from './../dummyapi/friendsapi';
import FriendComponent from './../components/friendComponent';

let mapDispatchToProps = function(dispatch){
    return {
        addFriends(data){
            dispatch(addFriendList(data))
        } 
    }
}

let mapStateToProps = function(state){
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
        getFriendList(user.id)
            .then(response => {
                let { status } = response;
                let { addFriends } = this.props;
                if(status == 'ok')
                    addFriends(response)
                else throw response;
            })
            .catch((error) => {
                console.log(error)
            });
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

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);