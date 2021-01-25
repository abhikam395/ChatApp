import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

import AuthLink from './../../components/common/AuthLinkComponent';

export default class RegisterScreen extends Component{

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
                        value="Submit"/>
                </form>
            </div>
        )
    }
}