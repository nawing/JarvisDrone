var User            = require('./../app/models/user');
var Response        = require('./../app/response/index');
var passport        = require('passport');
var BearerStrategy  = require('passport-http-bearer').Strategy;

module.exports = function(passport) {

  passport.use(new BearerStrategy( function(token, done) {

    User.findOne({ token: token }, function (err, user) {
      if (err)    return done(null, false, Response.TOKENFAIL);
      if (!user)  return done(null, false, Response.TOKENFAIL);
      if (user)   return done(null, user, { scope: 'read' });
    });

  }));

};
