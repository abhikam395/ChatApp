import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginScreen from './../screens/loginScreen';
import RegisterScreen from './../screens/registerScreen';
import HomeScreen from './../screens/homeScreen';

export default function router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomeScreen}/>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
            </Switch>
        </BrowserRouter>
    )
}