// var pngStream = client.getPngStream();
var http        = require('http');
var arDrone     = require('./../index');
var Response    = require('./../response/index');
var PaVEParser  = require('./../../lib/video/PaVEParser');
var client      = arDrone.createClient();


// var lastPng;
//
// pngStream
//   .on('error', function() {
//   })
//   .on('data', function(pngBuffer) {
//     lastPng = pngBuffer;
//   });


exports.takePhoto = function(req, res)
{
  try {

    var pngStream = client.getPngStream();

    var lastPng;
    pngStream.on('error', function(){
        res.json(Response.TAKEPHOTOFAIL);
      }).on('data', function(pngBuffer) {
        lastPng = pngBuffer;
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(lastPng);
      });

  } catch (e) {
    res.json(Response.TAKEPHOTOFAIL);
  }
}



exports.stream = function(req, res)
{
  try {
    var parser  = new PaVEParser();
    var video   = client.getVideoStream();

    parser.on('data', console.log);
    parser.on('error', console.log);

    video.pipe(parser);

  } catch (e) {
    res.json(Response.STREAMVIDEOFAIL);
  }
}
