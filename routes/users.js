var express = require('express');
var router = express.Router();
const User = require('./../models').User;
var { errorResponse, successResponse } = require('./../utils/response');

const USER_FETCHED_MESSAGE = 'User fetched';
const USERS_NOT_FOUND_MESSAGE = 'Users not found';

//regsiter user
router.get('/', async function(req, res, next) {
  const users = await User.findAll({
    attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
  });
  if(users){
    successResponse(res, {
      users: users,
    }, USER_FETCHED_MESSAGE)
  }
  else{
    errorResponse(res, {
      message: USERS_NOT_FOUND_MESSAGE
    })
  }
});

module.exports = router;
