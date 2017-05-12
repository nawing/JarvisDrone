var User      = require('./../models/user');
var Response  = require('./../response/index');
var bcrypt    = require('bcrypt-nodejs');
var crypto    = require('crypto');

exports.show = function(req, res)
{
  try {
    User.findOne({ key : req.user.key }, function (err, user){
      if (err)          { res.json(Response.USERSHOWFAIL); }
      else if(!user)    { res.json(Response.USERSHOWFAIL); }
      else              { res.json(Response.USERSHOWSUCCESS); }
    });
  } catch (e) {
    res.json(Response.USERSHOWFAIL);
  } finally {

  }
}

exports.create = function(req, res)
{
  try {
    var user = new User ({
      name        : req.body.name,
      email       : req.body.email,
      key         : bcrypt.hashSync(Math.floor((Math.random() * 99999999) *99), null, null),
      password    : new Buffer(crypto.pbkdf2Sync(req.body.password, 'rhVLm+Lkal8q7lQ=', 1333, 32)).toString('base64'),
      created_at  : new Date,
      updated_at  : new Date,
      token       : bcrypt.hashSync(Math.floor((Math.random() * 99999999) *99), null, null)
    });
    user.save(function(err) {
      if (err)        { res.json(Response.USERCREATEFAIL); }
      else            { res.json(Response.USERCREATESUCCESS); };
    });
  } catch (e) {
    res.json(Response.USERCREATEFAIL);
  } finally {

  }
}

exports.edit = function(req, res)
{
  try {
    User.findOneAndUpdate(
      { key : req.body.key },{
        $set : {
          name  : req.body.name
        }
      }, function(err) {
        if (err)  { res.json(Response.USEREDITFAIL); }
        else      { res.json(Response.USEREDITSUCCESS); }
    });
  } catch (e) {
    res.json(Response.USEREDITFAIL);
  } finally {

  }
}

exports.login = function(req, res)
{
  try {
    var hashedpw = new Buffer(crypto.pbkdf2Sync(req.body.password, 'rhVLm+Lkal8q7lQ=', 1333, 32)).toString('base64');
    User.findOne({ phone : req.body.name, password : hashedpw }, { password : 0 }, function(err , user){
      if(err)         { res.json(Response.USERLOGINFAIL); }
      else if(!user)  { res.json(Response.USERLOGINFAIL); }
      else if(user)   {
        var data = Response.USERLOGINSUCCESS;
        data['data']= user;
        res.json(data);
      }
    });
  } catch (e) {
    res.json(Response.USERLOGINFAIL);
  } finally {

  }
}
