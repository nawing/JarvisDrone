var User            = require('./../app/models/user');
var passport        = require('passport');
var BearerStrategy  = require('passport-http-bearer').Strategy;

module.exports = function(passport) {

  passport.use(new BearerStrategy( function(token, done) {
    
  }));

};
