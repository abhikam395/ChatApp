import React, { Component, Suspense } from 'react';
import './home.scss';

import TabsComponent from './../components/tabscomponent';
import { Route, Switch, Redirect } from 'react-router-dom';

const RecentChatScreen = React.lazy(() => import('./recentchatScreen'));
const FriendsScreen = React.lazy(() => import('./friendsScreen'));
const OnlineFriendScreen = React.lazy(() => import('./onlineFriendScreen'));
const AddFriendScreen = React.lazy(() => import('./addFriendScreen'));
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
        let user = localStorage.getItem('user');
        if(user == undefined || user == null || user == 'undefined'){
            return <Redirect to="/login"/>
        }
        else return(
            <div className="home home--size home--theme">
                <div className="home__container home__container--size">
                    <TabsComponent {...this.props}/>
                    <Switch>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Route exact path="/" component={RecentChatScreen}/>
                            <Route path="/friends" component={FriendsScreen}/>
                            <Route path="/addfriend" component={AddFriendScreen}/>
                            <Route path="/online" component={OnlineFriendScreen}/>
                        </Suspense>
                    </Switch>
                </div>
            </div>
        )
    }
}