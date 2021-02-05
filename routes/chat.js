var express = require('express');
var router = express.Router();
var Group = require('./../models').Group;
var Chat = require('./../models').Chats;
var { messageMiddleWare } = require('./../middlewares/chat-middleware');
var { Op } = require('sequelize');

const USER_CREATED = 'User created';
const USER_FOUND = 'User found';
const ERROR = 'Unable to created or find user';
const MESSAGE_SENT = "Message send";
const MESSAGE_FAILED = 'Unable to send message';
const USER_NOT_FOUND = 'User not found';

//send message
router.post('/', messageMiddleWare(), async function(req, res, next) {

    const { message, senderId, receiverId } = req.body;
    const [ group, created ] = await Group.findOrCreate({
        where: {
            [Op.or]: [
                {
                    for: receiverId,
                    userId: senderId
                },
                {
                    for: senderId,
                    userId: receiverId
                }
            ]
        },
        defaults: {
            for: receiverId,
            userId: senderId
        }
    })
    if(group){
        let chat;
        try{
            chat = await Chat.create({
                groupId: parseInt(group.id),
                senderId: parseInt(senderId),
                content: message
            });
        }catch(err){
            res.status(404).json({
                status: 'error',
                message: 'User not found'
            })
        }
        res.status(201).json({
            status: 'ok',
            message: 'Message sent'
        })
    }
    else{
        res.status(503).json({
            status: 'error',
            code: 'Server error',
            message: 'Service not working'
        })
    }
});


module.exports = router;
