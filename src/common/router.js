import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const LoginScreen = React.lazy(() => import('./../screens/loginScreen'));
const RegisterScreen = React.lazy(() =>  import('./../screens/registerScreen'));
const HomeScreen = React.lazy(() =>  import('./../screens/homeScreen'));
const ChatAreaScreen = React.lazy(() =>  import('./../screens/chatAreaScreen'));

export default function router(){
    return (
        <Switch>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/register" component={RegisterScreen}/>
                <Route path="/chat" component={ChatAreaScreen}/>
                <Route path="/*" exact component={HomeScreen}/>
            </Suspense>
        </Switch>
    )
}