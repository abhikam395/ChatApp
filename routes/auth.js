var express = require('express');
var router = express.Router();
const User = require('./../models').User;
var { login, register } = require('./../middlewares/auth-middleware');
// var { errorResponse, successResponse } = require('./../utils/response');

const REGISTER_ERROR_CODE = 'Aready Registered';
const LOGIN_MESSAGE = 'User loggedIn';
const WRONG_EMAIL_MESSAGE = 'Check your email again';
const WRONG_PASSWORD_MESSAGE = 'Wrong password please check your password again';

//regsiter user
router.post('/register', register(), async function(req, res, next) {
  let { name, email, password } =  req.query;
  let user;
  try{
    user = await User.create({
      name: name,
      email: email,
      password: password
    });
  }catch(error){
    res.status(400).json({
      status: 'error',
      code: 'Already exist',
      errors: [`${email} already exist`]
    })
    return;
  }
  if(user){
    let { id, name, email } = user;
    res.status(201).json({
      status: 'ok',
      token: '',
      user: {
        id: id,
        name: name,
        email: email
      }
    })
  }
  else{
    res.status(503).json({
      status: 'error',
      code: 'Server error',
      errors: ['Register service not working']
    })
  }
});

router.post('/login', login(), async function(req, res, next){
  let { email, password } = req.query;
  let user;
  try{
    user = await User.findOne({
      where: { email: email, password: password }
    });
  }catch(err){
    res.json(err);
  }
  if(user){
    let { id, name, email } = user;
    
    res.status(200).json({
      status: 'ok',
      token: '',
      user: {
        id: id,
        name: name,
        email: email
      }
    })
  }
  else{
    res.status(404).json({
      status: 'error',
      code: 'Login invalid',
      message: ['Please check your email or password']
    })
  }
});

module.exports = router;
