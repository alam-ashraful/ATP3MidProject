// Declaration
var express = require('express');
var app = express();
var port = 1337;
var bodyParser = require('body-parser');
var path = require('path');
var expressSession=require('express-session');



var home = require('./controllers/home');
//var logout = require('./controllers/logout');
var registration = require('./controllers/registration');
var checkUser=require('./controllers/uniqueuser');



// Configure
app.set('view engine', 'ejs');

// Middlewares
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './Asset')));
/*
app.all('*',function(req,res,next){

	if(req.url=='/login' ||req.url=='/' ||req.url=='/registration' || req.url=='/checkUser/email' || req.url=='/checkUser/username')
	{
		next();
		return;
	}
	/*if(req.session.loggedUser==null)
	{
		res.redirect('./login');
	}
	else
	{
		next();
	}
});

*/
//// Route
//app.use('/login', login);
app.use('/home', home);
app.use('/registration', registration);
app.use('/uniqueuser',checkUser);



// Server startup
app.listen(port, function(){
	console.log('server started at port ' + port);
});