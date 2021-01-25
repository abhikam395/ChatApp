import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

import AuthLink from './../../components/common/AuthLinkComponent';

export default class LoginScreen extends Component{

    verifyCredential({email, password}){
        console.log(1 + "  " + password)
        if(!email.includes('@gmail.com') || email.length < 12)
            return false;
        if(password.length < 5)
            return false;
        return true;
    }

    submit(){
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;

        if(this.verifyCredential({email: email, password: password})){
            
        }
        else{
            console.log('Check your inputs')
        }
    }

    render(){
        return (
            <div className="login-container login-container--size login-container--theme">
                <h1 className="login-label">Login</h1>
                <AuthLink routename="register" navTo="Register"/>
                <form action="post" className="login-form">
                    <div className="login-column">
                        <label className="login-label-email">Email</label>
                        <input id="login-email" className="login-input" type="email"/>
                    </div>
                    <div className="login-column">
                        <label className="login-label-password">Password</label>
                        <input id="login-password" className="login-input" type="password"/>
                    </div>
                    <input className="login-input-submit" 
                        id="login-submit" 
                        type="button" 
                        value="Submit"
                        onClick={this.submit.bind(this)}/>
                </form>
            </div>
        )
    }
}