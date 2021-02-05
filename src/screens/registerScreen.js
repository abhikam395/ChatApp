import React, { Component } from 'react';
import './register.scss';

import { addUserInfo } from './../store/actions/auth-actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from './../dummyapi/authapi';

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

class RegisterScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            errors: []
        }
    }

    validate({name, email, password}){
        let domain = email.substring(email.lastIndexOf('@'));
        let errors = [];
        if(name == undefined || name.length < 3)
            errors.push('Name must be more than 2 characters')
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
        let name = document.getElementById('register-name').value;
        let email = document.getElementById('register-email').value;
        let password = document.getElementById('register-password').value;
        user['name'] = name;
        user['email'] = email;
        user['password'] = password;
        return user;
    }

    async register(event){
        event.preventDefault();
        this.setState({errors: []})
        let user = this.getUserValue();

        if(this.validate(user)){
            //remove errors if there any
            let response = null;
            try{
                response = await register(user);
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

    //show errors list if there are any errors
    errorList({errors}){
        if(errors == null || !errors.length || errors == undefined)
            return;
        else {
            console.log(123)
            return <ul className="error__list">
                {errors.map((error, index) => {
                    return <li className="error__item" key={index}>{error}</li>
                })}
            </ul>
        }
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
                        { this.errorList(this.state)}
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);