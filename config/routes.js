var user            = require('../app/controllers/user');
var manuals         = require('../app/controllers/manuals');

var mongo = require('mongodb');

module.exports = function (app, passport) {


  app.get ('/',             function(req, res) { res.sendfile('public/index.html'); });

  app.post('/api/login',    function(req, res) { user.login(req,res); });
  app.post('/api/signup',   function(req, res) { user.create(req,res); });
  app.get ('/api/me',       function(req, res) { user.show(req,res); });
  app.post('/api/me',       function(req, res) { user.edit(req,res); });

  app.post('/api/takeOff',  passport.authenticate('bearer', { session: false }), function(req, res) { manuals.takeOff(req, res); });
  app.post('/api/land',     passport.authenticate('bearer', { session: false }), function(req, res) { manuals.land(req, res); });
  app.post('/api/right',    passport.authenticate('bearer', { session: false }), function(req, res) { manuals.rotateClockWise(req, res); });
  app.post('/api/left',     passport.authenticate('bearer', { session: false }), function(req, res) { manuals.rotateClockAntiWise(req, res); });
  app.post('/api/forward',  passport.authenticate('bearer', { session: false }), function(req, res) { manuals.forward(req, res); });
  app.post('/api/backward', passport.authenticate('bearer', { session: false }), function(req, res) { manuals.backward(req, res); });
  app.post('/api/flyUp',    passport.authenticate('bearer', { session: false }), function(req, res) { manuals.flyUp(req, res); });
  app.post('/api/flyDown',  passport.authenticate('bearer', { session: false }), function(req, res) { manuals.flyDown(req, res); });
  app.post('/api/hold',     passport.authenticate('bearer', { session: false }), function(req, res) { manuals.hold(req, res); });

}
