import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import LoginScreen from './../screens/auth/LoginScreen';
import RegisterScreen from './../screens/auth/RegisterScreen';
import UsersScreen from '../screens/users/UsersScreen';
import HomeScreen from './../screens/home/HomeScreen';

/**
 * return routes to pages
 */
export default function() {
   return (
       <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeScreen}/>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
                <Route path="/users" component={UsersScreen}/>
            </Switch>
       </BrowserRouter>
   )
}