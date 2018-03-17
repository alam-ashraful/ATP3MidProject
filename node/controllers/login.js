// Declaration
var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/login-model');
var session = require('express-session');

// Request Handler
router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password
	};

	console.log(user);

	loginModel.validateUser(user, function(valid){
		if(valid=="admin" || valid=="user")
		{
			// res.send('loged in');
			
			if (valid=="user") {
				user.type = "user";
				req.session.loggedUser = user;
				res.redirect('/home');
			}else if(valid=="admin"){
				user.type = "admin";
				req.session.loggedUser = user;
				res.redirect('/admin');
			}
		}
		else
		{
			res.render('login/index',{errs: "Invalid username or password !"});
		}
	});

});


// Export (mandatory)
module.exports = router;