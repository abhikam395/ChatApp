const { errorResponse } = require('./../utils/response');

/**
 * validate user register data
 */
module.exports.register = function(){
    return function(req, res, next){
        let errors  = [];
        let { name, email, password } = req.query;
        if(name.trim() == "" || name.length < 3){
            if(name.length < 3)
                errors.push('Your name size must be more than 2 characters');
            else
                errors.push('Your name must not empty');
        }   
        let domain = email.substring(email.lastIndexOf('@'));
        if(email.trim() == "" || domain != '@gmail.com'){
            if(domain != '@gmail.com')
                errors.push('Your email does not contains @gmail.com');
            else
                errors.push('Your email must not empty');
        } 
        if(password.trim() == "" || password.length < 5){
            if(password.length < 5)
                errors.push('Your password length must be more than 4 characters');
            else
                errors.push('Your password must not empty');
        }
        if(errors.length == 0)
            next()
        else{
            res.status(400).json({
                status: 'error',
                code: 'Invalid fields',
                errors: errors
            })
        }
    }
}

/**
 * validate user login data
 */
module.exports.login = function(){
    return function(req, res, next){
        let errors  = [];
        let {email, password } = req.query;
        
        if(!email || !email.includes('@gmail.com')){
            
            if(email == null || email == undefined)
                errors.push('Your email must not empty');  
            else if(!email.includes('@gmail.com'))
                errors.push('Your email does not contains @gmail.com'); 
        }
        if(!password || password.length < 5){
            if(password == null || password == undefined)
                errors.push('Your password must not empty');
            else if(password.length < 5 )
                errors.push('Your password length must be more than 4 characters');
        }
        if(errors.length == 0)
            next()
        else{
            res.status(400).json({
                status: 'error',
                code: 'Invalid fields',
                messages: errors
            })
        }
    }
}