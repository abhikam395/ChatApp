import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

import AuthLink from './../../components/common/AuthLinkComponent';

export default class RegisterScreen extends Component{

    verifyCredential({name, email, password}){
        console.log(1 + "  " + password)
        if(name.length < 3)
            return false;
        if(!email.includes('@gmail.com') || email.length < 12)
            return false;
        if(password.length < 5)
            return false;
        return true;
    }

    submit(){
        let name = document.getElementById('register-name').value;
        let email = document.getElementById('register-email').value;
        let password = document.getElementById('register-password').value;

        if(this.verifyCredential({name: name, email: email, password: password})){
            // console.log('Check your inputs')
        }
        else{
            console.log('Check your inputs')
        }
    }

    render(){
        return (
            <div className="register-container register-container--size register-container--theme">
                <h1 className="register-label">Register</h1>
                <AuthLink routename="login" navTo="Login"/>
                <form action="post" className="register-form">
                    <div className="register-column">
                        <label className="register-label-name">Name</label>
                        <input id="register-name" className="register-input" type="name"/>
                    </div>
                    <div className="register-column">
                        <label className="register-label-email">Email</label>
                        <input id="register-email" className="register-input" type="email"/>
                    </div>
                    <div className="register-column">
                        <label className="register-label-password">Password</label>
                        <input id="register-password" className="register-input" type="password"/>
                    </div>
                    <input className="register-input-submit" id="register-submit" type="button" 
                        value="Submit" onClick={this.submit.bind(this)}/>
                </form>
            </div>
        )
    }
}