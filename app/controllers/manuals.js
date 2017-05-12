var arDrone   = require('./../index');
var Response  = require('./../response/index');
var client    = arDrone.createClient();
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
      .after(100, function() {
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
    client.after(1, function() {
        this.stop();
        this.land();
      });
    res.json(Response.LANDSUCCESS);
  } catch (e) {
    res.json(Response.LANDFAIL);
  } finally {
  }
}


exports.rotateClockWise = function (req, res)
{
  try {
    client.after(1, function() {
        this.clockwise(0.7);
      })
      .after(1, function() {
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
    client.after(1, function() {
        this.clockwise(-0.7);
      })
      .after(1, function() {
        this.stop();
      });
    res.json(Response.LEFTSUCCESS);
  } catch (e) {
    res.json(Response.LEFTFAIL);
  } finally {
  }
}

exports.forward = function (req, res)
{
  try {
    client.after(1, function() {
        this.front(0.7);
      })
      .after(1000, function() {
        this.stop();
      });
    res.json(Response.FORWARDSUCCESS);
  } catch (e) {
    res.json(Response.FORWARDFAIL);
  } finally {

  }
}

exports.backward = function (req, res)
{
  try {
    client.after(1, function() {
        this.front(0.7);
      })
      .after(1000, function() {
        this.back();
      });
    res.json(Response.BACKWARDSUCCESS);
  } catch (e) {
    res.json(Response.BACKWARDFAIL);
  } finally {

  }
}

exports.flyUp = function (req, res)
{
  try {
    client.after(1, function() {
        this.up(0.7);
      })
      .after(1000, function() {
        this.back();
      });
    res.json(Response.FLYUPSUCCESS);
  } catch (e) {
    res.json(Response.FLYUPFAIL);
  } finally {

  }
}

exports.flyDown = function (req, res)
{
  try {
    client.after(1, function() {
        this.down(0.7);
      })
      .after(1000, function() {
        this.back();
      });
    res.json(Response.FLYDOWNSUCCESS);
  } catch (e) {
    res.json(Response.FLYDOWNFAIL);
  } finally {

  }
}

exports.hold = function (req, res)
{
  try {
    client.stop();
    res.json(Response.HOLDSUCCESS);
  } catch (e) {
    res.json(Response.HOLDFAIL);
  } finally {

  }
}
