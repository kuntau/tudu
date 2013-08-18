// config from https://github.com/blai/grunt-express-angular-example/blob/develop/server/index.js
//

var express = require('express');
var path = require('path');


var app = express();
var passport = require('passport');

var Authentication = require('./authentication');

app.use(express.logger('dev'));
// console.log('11wtf!!');


// marker for `grunt-express` to inject static folder/contents
app.use(function staticsPlaceholder(req, res, next) {
  return next();
});

app.use(express.cookieParser());
app.use(express.session({ secret: 'mah secret' }));
app.use(express.bodyParser());


// Add csrf support
app.use(express.csrf({ value: Authentication.csrf }));
app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.session._csrf);
  next();
});

// setup passport authtentication
app.use(passport.initialize());
app.use(passport.session());

passport.use(Authentication.localStrategy);
passport.serializeUser(Authentication.serializeUser);
passport.deserializeUser(Authentication.deserializeUser);

app.post('/login', Authentication.login);
app.get('/logout', Authentication.logout);

app.get('/user', Authentication.ensureAuthenticated, function (req, res, next) {
  return res.json(req.session.user);
});

app.get('/hello/:who', Authentication.ensureAuthenticated, function (req, res, next) {
  return res.json({hello: req.params.who});
});

module.exports = app;
