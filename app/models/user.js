var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  email         : { type : String, required : true, match : /.+@.+\..+/, lowercase : true },
  name          : { type : String, required : true },
  key           : { type : String, required : true },
  password      : { type : String, required : true },
  created_at    : { type : Date,   default: Date.now },
  updated_at    : { type : Date,   default: Date.now },
  token         : { type : String, required : true },
  loggedInCount : { type : Number, default : 0 }
});

module.exports = mongoose.model('User', schema, 'users');
