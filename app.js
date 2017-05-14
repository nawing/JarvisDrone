var express       = require('express');
var app           = express();
var multer        = require('multer')
var constants     = require('constants');
var constant      = require('./config/constants');
var port          = process.env.PORT || 8042;
var mongoose      = require('mongoose');
var passport      = require('passport');
var flash         = require('connect-flash');
var path          = require('path');
var cors          = require('cors');
var morgan        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var session       = require('express-session');
var bodyParser    = require('body-parser');
var dateFormat    = require('dateformat');
var http          = require('http');
var socket        = require("socket.io");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// app.use(cors);
require('./config/routes.js')(app, passport);
app.set('port', port);

var server  = http.createServer(app);
var io      = socket(server);
server.listen(port);

console.log('The magic happens on port ' + port);

app.use(function (req, res, next) { res.status(404).render('404', {title: "Sorry, page not found", session: req.sessionbo}); });
app.use(function (req, res, next) { res.status(500).render('404', {title: "Sorry, page not found"}); });

exports = module.exports = app;
