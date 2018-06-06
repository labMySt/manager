const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require("passport");
const session = require('express-session');
const logger = require('morgan');
const config = require('config');
var SequelizeStore = require("connect-session-sequelize")(session.Store);
//------------------------------------------------------------------------------
const sessoinConf = config.get('Customer.sessionConf');
const db = require("./models/index");
//------------------------------------------------------------------------------

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const myStore = new SequelizeStore({
  db: db.sequelize
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(logger('dev'));
app.use(session({
  secret: "keyboard cat",
  store: myStore,
  resave: false,
  proxy: true,
  saveUninitialized: false

}));
myStore.sync();
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//--------------------------------routes----------------------------------------
app.use('/', indexRouter);
app.use('/users', usersRouter);
//------------------------------------------------------------------------------
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
  res.render('error');
});

module.exports = app;
