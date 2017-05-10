var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  key           : { type : String, required : true },
  password      : { type : String, required : true },
  phone         : { type : String, required : true, unique : true },
  role          : { type : String, required : true },
  created_at    : { type : Date,   default: Date.now },
  updated_at    : { type : Date,   default: Date.now },
  token         : { type : String, required : true },
  loggedInCount : { type : Number, default : 0 }
});

module.exports = mongoose.model('User', schema, 'users');
