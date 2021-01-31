var express = require('express');
var router = express.Router();
const User = require('./../models').User;
var { login, register } = require('./../middlewares/auth-middleware');
var { errorResponse, successResponse } = require('./../utils/response');

const REGISTER_MESSAGE = 'User registerd';
const LOGIN_MESSAGE = 'User loggedIn';
const WRONG_EMAIL_MESSAGE = 'Check your email again';
const WRONG_PASSWORD_MESSAGE = 'Wrong password please check your password again';

//regsiter user
router.post('/register', register(), function(req, res, next) {
  let { name, email, password } =  req.query;
  User.create({
    name: name,
    email: email,
    password: password
  })
  .then(data => {
    let { id, name, email } = data;
    successResponse(res, {id: id, name: name, email: email}, REGISTER_MESSAGE)
  })
  .catch(err => {
    errorResponse(res, {
      message: err.errors[0].message,
      code: err.parent.code
    })
  })
});

router.post('/login', login(), async function(req, res, next){
  let { email, password } = req.query;
  let user = await User.findOne({
    where: { email: email }
  });
  
  if(user){
    user = await User.findOne({
      where: {
        email: email,
        password: password
      }
    })
    if(user){
      let {id, name, email} = user;
      successResponse(res, {
        id: id,
        name: name,
        email: email
      },
      LOGIN_MESSAGE)
    }
    else{
      errorResponse(res, {
        message: WRONG_PASSWORD_MESSAGE
      })
    }
  }
  else {
    errorResponse(res, {
      message:  WRONG_EMAIL_MESSAGE
    })
  }
})

module.exports = router;
