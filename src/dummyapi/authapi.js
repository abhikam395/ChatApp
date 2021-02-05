const object = {
    id: 1,
    name: 'Abhhishek',
    email: 'abhikam1525@gmail.com',
    password: '12345'
};

import store from './../store';
import { addUserInfo, removeUserInfo } from './../store/actions/auth-actions';

function registerRequest(user){
    let {name, email, password } = user;
    let errors = [];
    let domain = email.substring(email.lastIndexOf('@'));
    if (name == undefined || name.length < 3){
        if(email == undefined)
            errors.push('Name must not be empty');   
        else
           errors.push('There must be more than 2 character in your name');
    }
    if (email == undefined || domain != '@gmail.com'){
        if(email == undefined)
            errors.push('Email must not be empty');
        else
           errors.push('Email must contain @gmail.com');
    }
    if(password == undefined || password.length < 5){
        if(password == undefined)
            errors.push('Password must not be empty');
        else
            errors.push('Password must more than 4 characters')    
    }
    if(errors.length)
        return {
            status: 'error',
            code: 'Server Error',
            messages: errors
        }
    else{
        return {
            status: 'ok',
            message: 'User loggedIn',
            user: object
        }
    }    
}

function loginRequest(user){
    let { email, password } = user;
    let errors = [];
    let domain = email.substring(email.lastIndexOf('@'));
    if (email == undefined || domain != '@gmail.com' || email != object.email){
        if(email == undefined)
            errors.push('Email must not be empty');
        else if (email != object.email)
            errors.push('Email not registered')    
        else
           errors.push('Email must contain @gmail.com');
    }
    if(password == undefined || password.length < 5 || password != object.password){
        if(password == undefined)
            errors.push('Password must not be empty');
        else if (password != object.password){
            errors.push('Incorrect Password')
        }
        else
            errors.push('Password must more than 4 characters')    
    }
    if(errors.length)
        return {
            status: 'error',
            code: 'Server Error',
            messages: errors
        }
    else{
        return {
            status: 'ok',
            message: 'User loggedIn',
            user: object
        }
    }    
}

export function register(userCredential){
    let response = registerRequest(userCredential);
    let { status, message, messages } =  response;
    if(status == 'ok'){
        store.dispatch(addUserInfo({status: true, user: response.user, message: message }))
    }
    else
        store.dispatch(addUserInfo({status: false, errors: messages}));
}
 
export function login(userCredential){
    let response = loginRequest(userCredential);
    let { status, message, messages } =  response;
    if(status == 'ok'){
        store.dispatch(addUserInfo({status: true, user: response.user, message: message }))
    }
    else
        store.dispatch(addUserInfo({status: false, errors: messages}));
}