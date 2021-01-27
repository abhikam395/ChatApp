import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';

export default class RegisterScreen extends Component{

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
                                className="register__input register__input--size" placeholder="Name"/>
                        <input type="email" 
                            className="register__input register__input--size" placeholder="Email"/>
                        <input type="password" 
                            className="register__input register__input--size" placeholder="Password"/>
                        <Link className="register__button 
                            register__button--size 
                            register__button--theme"
                            to="/">REGISTER</Link>
                        <p>Already have an account?  
                            <Link to="/login" className="register__link">Login</Link>
                        </p>    
                    </form>
                </div>
            </div>
        )
    }
}