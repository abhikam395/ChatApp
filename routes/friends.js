var express = require('express');
var router = express.Router();
var { Op } = require('sequelize');
var { follow } = require('./../middlewares/friend-middleware');
var { successResponse, errorResponse } = require('./../utils/response');
var Friend = require('./../models').Friends;
var User = require('./../models').User;

const START_FOLLOWING_MESSAGE = 'Start following';
const ALREADY_FOLLOWING_MESSAGE  = 'Already following';
const UNABLE_TO_FOLLOW_MESSAGE = 'Unable to follow user';
const USER_NOT_FOUND_MESSAGE = 'User not found';


router.get('/friends', async function(req, res, next){
    let { id } = req.query;
    console.log(id)
    const friends = await Friend.findAll({
        where: { 
            followerId: id
        },
        attributes: [],
        include: [{
            model: User,
            as: 'followers',
            attributes: ['id', 'name', 'email']
        }]
    })

    if(friends){
        let friendsList = friends.map((friend) => friend.followers);
        successResponse(res, '', {friends: friendsList})
    }
    else
        errorResponse(res, '', {message: 'Friends not found'})
})

//follow user
router.post('/follow', follow(), function(req, res, next) {

    let { followerId, followeeId } = req.query;

    Friend.findOrCreate({
        where: {
            followerId: followerId,
            followeeId: followeeId
        },
        default: {
            followerId: followerId,
            followeeId: followeeId
        }
    })
    .then(data => {
        let createdNewEntry = data[1]; 
        if(createdNewEntry){
            successResponse(res, 
                START_FOLLOWING_MESSAGE, {
                user: data[0],
            })
        }
        else{
            errorResponse(res, {
                message: ALREADY_FOLLOWING_MESSAGE
            })
        }
    })
    .catch(err => {
        if(err.parent.errno == 1452){
            errorResponse(res, {
                message: USER_NOT_FOUND_MESSAGE
            })
        }
        else{
            errorResponse(res, {
                message: UNABLE_TO_FOLLOW_MESSAGE
            })
        }    
    })
});

module.exports = router;
