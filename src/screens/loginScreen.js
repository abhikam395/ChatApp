import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

export default class LoginScreen extends Component{

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
                            className="login__input login__input--size" placeholder="Email"></input>
                        <input type="password" 
                            className="login__input login__input--size" placeholder="Password"></input>
                         <Link className="login__button 
                            login__button--size 
                            login__button--theme"
                            to="/">LOGIN</Link>
                        <p>Don't have an account?  
                            <Link to="/register" className="login__link">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}