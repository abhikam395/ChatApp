var express = require('express');
var router = express.Router();
var Chat = require('./../models').Chat;
var ChatContent = require('./../models').ChatContent;
var { successResponse, errorResponse } = require('./../utils/response');
var { messageMiddleWare, chatMiddleware } = require('./../middlewares/chat-middleware');

const USER_CREATED = 'User created';
const USER_FOUND = 'User found';
const ERROR = 'Unable to created or find user';

//send message
router.post('/', messageMiddleWare(), async function(req, res, next) {
    const { message, senderId, receiverId } = req.body;
    const [ user, created, error ] = await Chat.findOrCreate({
        where: {
            sender_id: senderId,
            receiver_id: receiverId
        },
    }).catch(err => {
        if(err.parent.errno == 1452)
            errorResponse(res, { message:'User not found' })
        else
            errorResponse(res, {message: 'Unable to send message' })
    })
    
    if(user){
        let response = await ChatContent.create({ 
            chatId: user.id,
            message: message
        })
        if(response)
            successResponse(res, 'message sent', response);
        else 
            errorResponse(res, {
                message: 'Unable to create message'
            })    
    }
    else{
        errorResponse(res, {
            message: 'Unable to send message'
        })
    }
});

// get chats
router.get('/', chatMiddleware(), async function(req, res){
    let { senderId, receiverId } = req.query;
    const chat = await Chat.findOne({
        where: {
            sender_id: senderId,
            receiver_id: receiverId
        },
    });

    if(chat){
        let messages = await chat.getChatContents();
        successResponse(res, 'Messages fetched', {
            messages: messages
        })
    }
    else 
        errorResponse(res, {
            message: 'Chat not found'
        })
});

module.exports = router;
