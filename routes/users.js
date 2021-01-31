var express = require('express');
var router = express.Router();
var { Op } = require('sequelize');
const User = require('./../models').User;
var { errorResponse, successResponse } = require('./../utils/response');
var { userSearch } = require('./../middlewares/user-middleware');

const USER_FETCHED_MESSAGE = 'User fetched';
const USERS_NOT_FOUND_MESSAGE = 'Users not found';
const USER_FOUND_MESSAGE = 'User found';
const USER_NOT_FOUND_MESSAGE = 'User not found';

//regsiter user
router.get('/', async function(req, res, next) {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
  });
  if(users){
    successResponse(res, USER_FETCHED_MESSAGE, {
      users: users,
    })
  }
  else{
    errorResponse(res, {
      message: USERS_NOT_FOUND_MESSAGE
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

  if(users.length){
    successResponse(res, 
      USER_FOUND_MESSAGE,{
        users: users
      }
    )
  }
  else{
    successResponse(res, USER_NOT_FOUND_MESSAGE, {})
  }
})

module.exports = router;
