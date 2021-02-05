import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './login.scss';

import { login } from './../dummyapi/authapi';

const mapStateToProps = function(state){
    return {
        data: state.authState
    }
}

class LoginScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            errors: []
        }
    }

    validate({email, password}){
        let domain = email.substring(email.lastIndexOf('@'));
        let errors = [];
        if(email == undefined || domain != '@gmail.com')
            errors.push('Check your email');
        if(password == undefined || password.length < 4)
            errors.push('Check your password')
        if(errors.length){
            console.log(errors.length)
            this.setState({errors: errors})
            return false;
        }
        else{
            return true;
        }
    }

    login(event){
        event.preventDefault();
        let user = {};
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        user['email'] = email;
        user['password'] = password;
        if(this.validate(user)){
            //remove errors if there any
            let { errors } = this.state;
            if(errors.length)
                this.setState({errors: []});
            login(user);
            let { data } = this.props;
            if(data.status){
                console.log(data.user)
                let { history } = this.props;
                history.push('/');
            }
            else
                this.setState({errors: data.errors})
        }
    }

    errorList(errors){
        if(!errors.length)
            return;
        return <ul className="error__list">
            {errors.map((error, index) => {
                return <li className="error__item" key={index}>{error}</li>
            })}
        </ul>
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
                        { this.errorList(this.state.errors)}
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

export default connect(mapStateToProps)(LoginScreen);