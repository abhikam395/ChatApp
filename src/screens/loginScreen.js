import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

import { login } from './../apis/authapi';

export default class LoginScreen extends Component{

    validate({email, password}){
        if(email.trim() == "" || !email.includes('@gmail.com'))
            return false;
        else if(password.trim() == "" || password.length < 4)
            return false;
        return true;        
    }

    login(event){
        event.preventDefault();
        let user = {};
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        user['email'] = email;
        user['password'] = password;
        if(this.validate(user)){
            login(user);
        }
        else console.log('Check your inputs')
    }

    render(){
        return(
            <div className="login login--size">
                <div className="circle large"></div>
                <div className="circle medium"></div>
                <div className="circle small"></div>
                <div className="login__container 
                    login__container--size 
                    login__container--theme">
                    <form method="post" className="login__form login__form--size">
                        <input type="email"
                            id="login-email"
                            className="login__input login__input--size" 
                            placeholder="Email" 
                            />
                        <input type="password" 
                            id="login-password"
                            className="login__input login__input--size" 
                            placeholder="Password"/>
                         <button className="login__button 
                            login__button--size 
                            login__button--theme"
                            onClick={this.login.bind(this)}>LOGIN</button>
                        <p>Don't have an account?  
                            <Link to="/register" className="login__link">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}