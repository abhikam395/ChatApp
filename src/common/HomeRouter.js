import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import RecentChats from './../screens/subscreens/RecentChats';
import Friends from './../screens/subscreens/Friends';
import OnlineFriends from './../screens/subscreens/OnlineFriends';

export default function(){
    // let { path, url } = useRouteMatch();

    return (
        <Switch>
            {/* <Route path={path} exact component={RecentChats}/> */}
            <Route path="/" exact component={RecentChats}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/online" component={OnlineFriends}/>
            <Route path="*">
                <h1>Route not found</h1>
            </Route>
        </Switch>
    )
}