var express = require('express');
var router = express.Router();
var { Op } = require('sequelize');
const User = require('./../models').User;
var { errorResponse, successResponse } = require('./../utils/response');
var { userSearch } = require('./../middlewares/user-middleware');
var base = require('./../config/base.json');

const USER_FETCHED_MESSAGE = 'User fetched';
const USERS_NOT_FOUND_MESSAGE = 'Users not found';
const USER_FOUND_MESSAGE = 'User found';
const USER_NOT_FOUND_MESSAGE = 'User not found';

//regsiter user
router.get('/', async function(req, res, next) {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'createdAt']
  });
  if(users){
    res.status(200).json({
      status: 'ok',
      users: users
    })
  }
  else{
    res.status(404).json({
      status: 'error',
      code: 'UserNotFound',
      message: 'User not found'
    })
  }
});

router.get('/search', userSearch(), async function(req, res, next){
  let { name } = req.query;
  const users = await User.findAll({
    attributes: ['id', 'name', 'email'],
    where: {
      name: {
        [Op.like]: `${name}%`
      }
    }
  })

  if(users.length > 0){
    res.status(200).json({
      status: 'ok',
      users: users
    })
  }
  else{
    res.status(404).json({
      status: 'ok',
      code: 'UserNotFound',
      message: 'User not found'
    })
  }
})

module.exports = router;
