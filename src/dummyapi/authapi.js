const user = {
    name: 'Abhhishek',
    email: 'abhikam1525@gmail.com',
    password: '12345'
};

function loginRequest(user){
    let { email, password } = user;
    let errors = [];
    let domain = email.substring(email.lastIndexOf('@'));
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
            code: 'InvalidInputs',
            messages: errors
        }
    else{
        return {
            status: 'ok',
            message: 'User loggedIn'
        }
    }    
}
 
function login(userCredential){
    let response = loginRequest(userCredential);
    let { status, message, messages } =  response;
    if(status == 'ok'){
        console.log(message)
    }
    else if (status == 'error'){
        console.log(messages)
    }
    else
        console.log('Something happened on server side');
}

module.exports.login = login;
login({email: 'abhi123@gmail.com', password: '22342'})

