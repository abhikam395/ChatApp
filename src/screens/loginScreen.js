import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './login.scss';

import { login } from './../dummyapi/authapi';
import store from './../store';
import { addUserInfo } from './../store/actions/auth-actions';

let mapStateToProps = function(state){
    return {
        data: state.authState,
    }
}

let mapDispatchToProps = function(dispatch){
    return {
        addUserInfo: function(data){
            dispatch(addUserInfo(data))
        }
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
            this.setState({errors: errors})
            return false;
        }
        else{
            return true;
        }
    }

    getUserValue(){
        let user = {};
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        user['email'] = email;
        user['password'] = password;
        return user;
    }

    async login(event){
        event.preventDefault();
        this.setState({errors: []})
        let user = this.getUserValue();

        if(this.validate(user)){
            //remove errors if there any
            let response = null;
            try{
                response = await login(user);
                let { status } = response;
                if(status == 'ok'){
                    this.props.addUserInfo(response);
                    let { history } = this.props;
                    history.push('/');
                }
                else throw response;
                
            }catch(error){
                this.setState({errors: error.errors});
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);