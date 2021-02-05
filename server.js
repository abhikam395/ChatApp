var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cros = require('cors');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var friendsRouter = require('./routes/friends');
var chatRouter = require('./routes/chat');

var app = express();
app.use(cros());

app.use(express.static('dist'));

app.use(logger('dev'));
// app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/chats', chatRouter);
app.use('/api/v1', friendsRouter);
app.use('/*', indexRouter);
app.use('*', function(req,res){
  res.status(404).json({
    status: 'error',
    code: 'RouteNotFound',
    message: 'Route not found'
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
