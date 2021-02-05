import React, { Component } from 'react';
import './recentchat.scss';

import { connect } from 'react-redux';
import { fetchLastChats } from './../dummyapi/lastchatsapi';

import ChatComponent from './../components/chatComponent';

const mapStateToProps = function(state){
    return {
        data: state.lastChatsState,
    }
}

class RecentChatScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: localStorage.getItem('user')
        }
    }

    componentDidMount(){
        let user = this.state;
        fetchLastChats(user.id)
    }

    getRecentChats(chats){
        return chats.map((chat) => {
            return <ChatComponent chat={chat} key={chat.groupId} {...this.props}/>
        })
    }

    render(){
        return( 
            <ul className="recent-chats recent-chats--size">
                {this.getRecentChats(this.props.data.lastChats)}
            </ul>
        )
    }
}

export default connect(mapStateToProps)(RecentChatScreen);