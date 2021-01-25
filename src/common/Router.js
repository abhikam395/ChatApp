import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import LoginScreen from './../screens/Auth/LoginScreen';
import RegisterScreen from './../screens/Auth/RegisterScreen';

/**
 * return routes to pages
 */
export default function() {
   return (
       <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
            </Switch>
       </BrowserRouter>
   )
}