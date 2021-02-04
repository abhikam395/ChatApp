var express = require('express');
var router = express.Router();
var { Op } = require('sequelize');
var { followMiddleware } = require('./../middlewares/friend-middleware');
var { successResponse, errorResponse } = require('./../utils/response');
var Friend = require('./../models').Friends;
var User = require('./../models').User;

const START_FOLLOWING_MESSAGE = 'Start following';
const ALREADY_FOLLOWING_MESSAGE  = 'Already following';
const UNABLE_TO_FOLLOW_MESSAGE = 'Unable to follow user';
const USER_NOT_FOUND_MESSAGE = 'User not found';

//follow user
router.post('/follow', followMiddleware(), async function(req, res, next) {

    let { followerId, followeeId } = req.body;

    let [friend, created] = [null, null];
    try{
        [friend, created] = await Friend.findOrCreate({
            where: {
                followerId: followerId,
                followeeId: followeeId
            },
            default: {
                followerId: followerId,
                followeeId: followeeId
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'error',
            code: 'NotFound',
            message: 'User not found'
        })
    }
    if(created){
        res.status(201).json({
            status: 'ok',
            friend: friend
        })
    }
    else if(friend){
        res.status(400).json({
            status: 'error',
            code: 'AlreadyFollowing',
            message: 'You have already followed'
        })
    }
});

router.delete('/unfollow', followMiddleware(), async function(req, res, next) {

    let { followerId, followeeId } = req.body;
    console.log(1)

    let friend;
    try{
        friend = await Friend.destroy({
            where: {
                followerId: followerId,
                followeeId: followeeId
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'error',
            code: 'NotFound',
            message: 'User not found'
        })
    }
    if(friend){
        console.log(friend)
        res.status(200).json({
            status: 'ok',
            message: 'Unfollow successfully'
        })
    }
    else
        res.status(404).json({
            status: 'error',
            code: 'NotFound',
            message: 'User not found'
        })
    }
);

module.exports = router;
