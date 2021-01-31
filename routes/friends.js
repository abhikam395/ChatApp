var express = require('express');
var router = express.Router();
var { follow } = require('./../middlewares/friend-middleware');
var { successResponse, errorResponse } = require('./../utils/response');
var Friend = require('./../models').Friends;

const START_FOLLOWING_MESSAGE = 'Start following';
const ALREADY_FOLLOWING_MESSAGE  = 'Already following';
const UNABLE_TO_FOLLOW_MESSAGE = 'Unable to follow user';
const USER_NOT_FOUND_MESSAGE = 'User not found';

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
            successResponse(res, {
                user: data[0],
                message: START_FOLLOWING_MESSAGE
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
