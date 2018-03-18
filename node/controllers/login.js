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
		username: req.body.userName,
		password: req.body.password
	};



	loginModel.validateUser(user, function(valid){
		if(valid){

		if(valid[0].role == 'admin' || valid[0].role == 'user')
		{
			if (valid[0].role == "user") {
				// user.type = "user";
				req.session.loggedUser = user;
				res.redirect('/home');
			}else if(valid[0].role == "admin"){
				// user.type = "admin";
				req.session.loggedUser = user;
				res.redirect('/admin');
			}
		}
	}
		else
		{ 

			res.render('login/index',{errs: "Wrong password !"});
		}
	});

});


// Export (mandatory)
module.exports = router;