var authentication  = require('../app/controllers/authentication');
var manuals         = require('../app/controllers/manuals');

var mongo = require('mongodb');

module.exports = function (app, passport) {

  app.post('login',         function(req, res) { authentication.login(req,res); });
  app.post('signup',        function(req, res) { authentication.create(req,res); });
  
  app.get ('me',            function(req, res) { authentication.show(req,res); });
  app.post('me',            function(req, res) { authentication.edit(req,res); });

  app.get ('/',             function(req, res) { res.sendfile('public/index.html'); });
  app.post('/api/takeoff',  function(req, res) { manuals.takeoff(req, res); });
  app.post('/api/land',     function(req, res) { manuals.land(req, res); });
  app.post('/api/right',    function(req, res) { manuals.rotateClockWise(req, res); });
  app.post('/api/left',     function(req, res) { manuals.rotateClockAntiWise(req, res); });
  app.post('/api/forward',  function(req, res) { manuals.forward(req, res); });
  app.post('/api/backward', function(req, res) { manuals.backward(req, res); });
  app.post('/api/flyUp',    function(req, res) { manuals.flyUp(req, res); });
  app.post('/api/flyDown',  function(req, res) { manuals.flyDown(req, res); });
  app.post('/api/hold',     function(req, res) { manuals.hold(req, res); });

}
