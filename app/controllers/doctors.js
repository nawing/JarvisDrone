var arDrone   = require('./../index');
var client    = arDrone.createClient();
var Response  = require('./../response/index');
// var pngStream = client.getPngStream();
// var lastPng;
// pngStream
//   .on('error', console.log)
//   .on('data', function(pngBuffer) {
//     lastPng = pngBuffer;
//   });

exports.takeoff = function(req, res)
{
  try {
    client.after(100, function() {
        this.takeoff();
      })
      .after(1000, function() {
        this.stop();
      });
    res.json(Response.TAKEOFFSUCCESS);
  } catch (e) {
    res.json(Response.TAKEOFFFAIL);
  } finally {
  }
}

exports.land = function(req, res)
{
  try {
    client.after(10, function() {
        this.stop();
        this.land();
      });
    res.json(Response.LANDSUCCESS);
  } catch (e) {
    res.json(Response.LANDFAIL);
  } finally {
  }
}


exports.rotateClockWise   = function (req, res)
{
  try {
    client.after(10, function() {
        this.clockwise(0.1);
      })
      .after(10, function() {
        this.stop();
      });
    res.json(Response.RIGHTSUCCESS);
  } catch (e) {
    res.json(Response.RIGHTFAIL);
  } finally {
  }
}


exports.rotateClockAntiWise = function (req, res)
{
  try {
    client.after(10, function() {
        this.clockwise(-0.1);
      })
      .after(10, function() {
        this.stop();
      });
    res.json(Response.LEFTSUCCESS);
  } catch (e) {
    res.json(Response.LEFTFAIL);
  } finally {
  }
}
