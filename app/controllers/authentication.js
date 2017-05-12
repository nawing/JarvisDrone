var user      = require('./../models/user');
var Response  = require('./../response/index');


exports.show = function(req, res)
{
  try {
    res.json(Response.USERSHOWSUCCESS);
  } catch (e) {
    res.json(Response.USERSHOWFAIL);
  } finally {

  }
}

exports.create = function(req, res)
{
  try {
    res.json(Response.USERCREATESUCCESS);
  } catch (e) {
    res.json(Response.USERCREATEFAIL);
  } finally {

  }
}

exports.edit = function(req, res)
{
  try {
    res.json(Response.USEREDITSUCCESS);
  } catch (e) {
    res.json(Response.USEREDITFAIL);
  } finally {

  }
}

exports.login = function(req, res)
{
  try {
    res.json(Response.USERLOGINSUCCESS);
  } catch (e) {
    res.json(Response.USERLOGINFAIL);
  } finally {

  }
}
