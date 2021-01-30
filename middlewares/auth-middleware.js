const { errorResponse } = require('./../utils/response');

module.exports.login = function(){
    return function(req, res, next){
        let errors  = [];
        let { name, email, password } = req.query;
        if(name.trim() == "" || name.length < 3){
            if(name.length < 3)
                errors.push('Your name size must be more than 2 characters');
            else
                errors.push('Your name must not empty');
        }    
        else if(password.trim() == "" || password.length < 5){
            if(password.length < 5)
                errors.push('Your password length must be more than 4 characters');
            else
                errors.push('Your password must not empty');
        }
        else if(email.trim() == "" || !email.includes('@gmail.com')){
            if(!email.includes('@gmail.com'))
                errors.push('Your email does not contains @gmail.com');
            else
                errors.push('Your email must not empty');
        }
        if(errors.length == 0)
            next()
        errorResponse(res, {
            errors: errors 
        })
    }
}