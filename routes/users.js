var express = require('express');
var router = express.Router();
const User = require('./../models').User;
var { login } = require('./../middlewares/auth-middleware');
var { errorResponse, successResponse } = require('./../utils/response');

/* GET users listing. */
router.post('/register', login(), function(req, res, next) {
  let { name, email, password } = req.query;
  console.log(User)
  const user =  User.create({
    name: name,
    email: email,
    password: password
  });
  user.then(user => {
    successResponse(res, user);
  })

  user.catch(err => {
    errorResponse(res, err);
  })

  res.json({});
});

module.exports = router;
