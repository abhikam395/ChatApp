var express = require('express');
var router = express.Router();
var Group = require('./../models').Group;
var Chat = require('./../models').Chats;
var User = require('./../models').User
var { successResponse, errorResponse } = require('./../utils/response');
var { messageMiddleWare, chatMiddleware } = require('./../middlewares/chat-middleware');

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
    console.log(senderId + ' ' + receiverId)
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
    
    Chat.create({
        groupId: group.id,
        senderId: senderId,
        content: message
    }).then(user => {
        successResponse(res, MESSAGE_SENT)
    }).catch(err => {
        let { errno } = err.parent;
        if(errno == 1452){
            errorResponse(res, {
                message: USER_NOT_FOUND
            })
        }
        else{
            errorResponse(res, {
                message: MESSAGE_FAILED
            })
        }
    })
});

// get chats
router.get('/', chatMiddleware(), async function(req, res){
    let { senderId, receiverId, perpage, pageNo } = req.query;
    let currentPage = parseInt(pageNo) || 1;
    let offset = currentPage * perpage;
    const group = await Group.findOne({
        distinct: true,
        subQuery: false,
        offset: offset,
        limit: parseInt(perpage),
        attributes: [],
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
        include: [{
            model: Chat,
            association: 'chats',
            attributes:{
                exclude: ['groupId', 'senderId', 'updatedAt']
            },
            include: [
                {
                    model: User,
                    association: 'sender',
                    attributes: ['id', 'name'],
                }
            ],
        }],
    });

    if(group){
        successResponse(res, 'Messages fetched', {
            messages: group.chats
        })
    }
    else 
        errorResponse(res, {
            message: 'Chat not found'
        })
// });

// router.get('/lastchats', async function(req, res, next){
//     let { senderId } = req.query;
//     let chats = await Chat.findAll({
//         attributes: [],
//         where: {
//             sender_id: senderId
//         },
//         include: [
//             {
//                 attributes: ['id', 'name'],
//                 association: 'sender',
//             },
//             {
//                 attributes: ['id', 'name'],
//                 association: 'receiver',
//             },
//             {   
//                 // attributes: ['id', 'message'],
//                 association: 'messages',
//                 // offset: 1,
//                 order: [
//                     ['id', 'ASC']
//                 ]
//             },
//         ]
//     });
    
//     if(chats){
//         successResponse(res, 'Chats fetched', {
//             chats: chats
//         })
//     }
//     else
//         errorResponse(res, {
//             message: 'Unable to get messages'
//         })
})

module.exports = router;
