const { errorResponse } = require('./../utils/response');

/**
 * validate message, senderId and receiverId
 */
module.exports.messageMiddleWare = function(){
    return function(req, res, next){
        let {message, senderId, receiverId } = req.body;
        let errors = [];
        if(senderId == receiverId)
            errors.push(`You can't send message to youself`);
        if(message == undefined || message.trim().length == 0)
           errors.push('Message is empty');
        if (senderId == 0 || senderId == undefined)
            errors.push('SenderId is empty');
        if (receiverId == 0 || receiverId == undefined)
            errors.push('ReceivedId is empty')    

        console.log(1)
        if(errors.length)
            res.status(400).json({
                status: 'error',
                code: 'InvalidFields',
                messages: errors
            })
        else next();  
    }
}

module.exports.chatMiddleware = function(){
    return function(req, res, next){
        console.log(req.query)
        let {senderId, receiverId } = req.query;
        let errors = [];
        if (senderId == 0 || senderId == undefined)
            errors.push('SenderId is empty');
        if (receiverId == 0 || receiverId == undefined)
            errors.push('ReceivedId is empty')          
        
        if(errors.length)
            errorResponse(res, { errors: errors })
        else next();    
    }
}