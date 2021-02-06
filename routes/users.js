var express = require('express');
var router = express.Router();
var { Op } = require('sequelize');
const User = require('./../models').User;
var { userSearch } = require('./../middlewares/user-middleware');
var { chatMiddleware } = require('./../middlewares/chat-middleware');
var Group = require('./../models').Group;
var Chat = require('./../models').Chat;
var Friends = require('./../models').Friends

const USER_FETCHED_MESSAGE = 'User fetched';
const USERS_NOT_FOUND_MESSAGE = 'Users not found';
const USER_FOUND_MESSAGE = 'User found';
const USER_NOT_FOUND_MESSAGE = 'User not found';

//get users
router.get('/:id', async function(req, res, next) {
  let { id } = req.params;
  let followeeList = null, list;
  try {
    followeeList = await Friends.findAll({
      attributes: ['followeeId'],
      where: {
        followerId: id
      }
    })
    if(followeeList){
      list = followeeList.map((followee) => followee.followeeId);
    }
    else throw {};
    users = await User.findAll({
      attributes: ['id', 'name', 'email', 'createdAt'],
      where: {
        id:{
          [Op.notIn]: list
        }
      }
    });
    if(users){
      res.status(200).json({
        status: 'ok',
        users: users
      })
    }
    // else throw {};
  } catch (error) {
    console.log(error)
    res.status(404).json({
      status: 'error',
      code: 'UserNotFound',
      message: 'User not found'
    })
  }
});

router.get('/search', userSearch(), async function(req, res, next){
  let { name } = req.query;
  let users = null; 
  try {
    users = await User.findAll({
      attributes: ['id', 'name', 'email'],
      where: {
        name: {
          [Op.like]: `${name}%`
        }
      }
    })
    if(users){
      res.status(200).json({
        status: 'ok',
        users: users
      })
    }
  } catch (error) {
      res.status(404).json({
        status: 'ok',
        code: 'UserNotFound',
        message: 'User not found'
      })
  }
});

/**
 * get user friends
 */
router.get('/:id/friends', async function(req, res, next){
  let { id } = req.params;
  let user = null;
  try {
    user = await User.findOne({
      where: { id: id },
    });
    if(user){
      let friends = await user.getFriends();
      friends = friends.map(friend => {return {id: friend.id, name: friend.name, email: friend.email }})
      res.status(200).json({
        status: 'ok',
        friends: friends
      })
    }
  } catch (error) {
    res.status(404).json({
      status: 'error',
      code: 'NotFound',
      message: 'User not found'
    })
  }
})


// get chats
router.get('/:id/chats', chatMiddleware(), async function(req, res){
    let { senderId, receiverId} = req.query;
    let group = null;
    try {
      group = await Group.findOne({
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
            orders: [['createdAt', 'DESC']],
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
        res.status(200).json({
            status: 'ok',
            chats: group.chats
        })
      }
    } catch (error) {
      res.status(404).json({
        status: 'ok',
        message: 'Group not found'
    })
  }
})

// get last chats
router.get('/:id/lastchats', async function(req, res){
  let { id } = req.params;
  let groups;
  try {
    groups = await Group.findAll({
      // attributes: [],
      where: {
        [Op.or]: {
          for: id,
          userId: id
        }
      },
      include:[{
        model: Chat,
        association: 'chats',
        // include: Users
      }, 'createdAt', 'desc'],

    })
  } catch (error) {
      res.json(error)
  }
      // include: [{
      //     model: Chat,
      //     association: 'chats',
      //     order: [
      //       ['createdAt', 'DESC']
      //     ],
      //     // attributes:{
      //     //     exclude: ['groupId', 'updatedAt']
      //     // },
      //     include: [
      //         {
      //           order: [
      //             ['createdAt', 'DESC']
      //           ],
      //           model: User,
      //           association: 'sender',
      //           attributes: ['id', 'name'],
      //         }
      //     ],
      // }],
      // distinct: true
  // });

  if(groups){
      // let chats = groups.map((group) => {
      //   return group.chats[0]
      // })
      res.status(200).json({
          status: 'ok',
          chats: groups
      })
  }
  else 
      res.status(404).json({
          status: 'ok',
          message: 'Group not found'
      })
})


module.exports = router;
