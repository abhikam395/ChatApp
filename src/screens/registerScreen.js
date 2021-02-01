import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

import { register } from './../apis/authapi';

export default class RegisterScreen extends Component{

    validate({name, email, password}){
        if(name.trim() == "" || name.length < 3)
            return false;
        else if(email.trim() == "" || !email.includes('@gmail.com'))
            return false;
        else if(password.trim() == "" || password.length < 4)
            return false;
        return true;        
    }

    register(event){
        event.preventDefault();
        let user = {};
        let name = document.getElementById('register-name').value;
        let email = document.getElementById('register-email').value;
        let password = document.getElementById('register-password').value;
        user['name'] = name;
        user['email'] = email;
        user['password'] = password;
        if(this.validate(user)){
            register(user);
        }
        else console.log('Check your inputs')
    }

    render(){
        return(
            <div className="register register--size">
                <div className="circle large"></div>
                <div className="circle medium"></div>
                <div className="circle small"></div>
                <div className="register__container 
                    register__container--size 
                    register__container--theme">
                    <form method="post" className="register__form register__form--size">
                        <input type="name" 
                                id="register-name"
                                className="register__input register__input--size" placeholder="Name"/>
                        <input type="email" 
                                id="register-email"
                                className="register__input register__input--size" placeholder="Email"/>
                        <input type="password" 
                                id="register-password"
                                className="register__input register__input--size" placeholder="Password"/>
                        <button className="register__button 
                            register__button--size 
                            register__button--theme"
                            onClick={this.register.bind(this)}
                            >REGISTER</button>
                        <p>Already have an account?  
                            <Link to="/login" className="register__link">Login</Link>
                        </p>    
                    </form>
                </div>
            </div>
        )
    }
}