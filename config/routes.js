var authentication  = require('../app/controllers/authentication');
var doctors         = require('../app/controllers/doctors');

var mongo = require('mongodb');

module.exports = function (app, passport) {

    app.get('/',                    function(req, res){ res.sendfile('public/index.html'); });
    app.get('/takeoff',             function(req, res) { doctors.takeoff(req, res); });
    app.get('/land',                function(req, res) { doctors.land(req, res); });
    app.get('/rotateClockWise',     function(req, res) { doctors.rotateClockWise(req, res); });
    app.get('/rotateClockAntiWise', function(req, res) { doctors.rotateClockAntiWise(req, res); });

}
