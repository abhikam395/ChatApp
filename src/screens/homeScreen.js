import React, { Component } from 'react';
import './home.scss';

import TabsComponent from './../components/tabscomponent';
import { Route, Switch } from 'react-router-dom';

import RecentChatScreen from './recentchatScreen';
import FriendsScreen from './friendsScreen';
import OnlineFriendScreen from './onlineFriendScreen';
import AddFriendScreen from './addFriendScreen';
import { io } from 'socket.io-client';

export default class HomeScreen extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        // const socket = io('http://localhost:3000');
        // socket.on('connect', function () {
        //     console.log('connected')
        // })
    }

    render(){
        return(
            <div className="home home--size home--theme">
                <div className="home__container home__container--size">
                    <TabsComponent {...this.props}/>
                    <Switch>
                        <Route exact path="/" component={RecentChatScreen}/>
                        <Route path="/friends" component={FriendsScreen}/>
                        <Route path="/addfriend" component={AddFriendScreen}/>
                        <Route path="/online" component={OnlineFriendScreen}/>
                    </Switch>
                </div>
            </div>
        )
    }
}