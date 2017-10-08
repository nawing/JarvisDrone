var user            = require('../app/controllers/user');
var manuals         = require('../app/controllers/manuals');
var photo           = require('../app/controllers/photo');

var mongo = require('mongodb');

module.exports = function (app, passport) {


  app.get ('/',             function(req, res) { res.sendfile('public/index.html'); });

  app.post('/api/login',    function(req, res) { user.login(req,res); });
  app.post('/api/signup',   function(req, res) { user.create(req,res); });
  app.get ('/api/me',       function(req, res) { user.show(req,res); });
  app.post('/api/me',       function(req, res) { user.edit(req,res); });

  app.post('/api/takeOff',  function(req, res) { manuals.takeOff(req, res); });
  app.post('/api/land',     function(req, res) { manuals.land(req, res); });
  app.post('/api/right',    function(req, res) { manuals.rotateClockWise(req, res); });
  app.post('/api/left',     function(req, res) { manuals.rotateClockAntiWise(req, res); });
  app.post('/api/forward',  function(req, res) { manuals.forward(req, res); });
  app.post('/api/backward', function(req, res) { manuals.backward(req, res); });
  app.post('/api/flyUp',    function(req, res) { manuals.flyUp(req, res); });
  app.post('/api/flyDown',  function(req, res) { manuals.flyDown(req, res); });
  app.post('/api/hold',     function(req, res) { manuals.hold(req, res); });


  app.post('/api/photo',    function(req, res) { photo.takePhoto(req, res); });
  app.post('/api/video',    function(req, res) { photo.stream(req, res); });

}
