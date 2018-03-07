// Declaration
var express = require('express');
var router = express.Router();
var registration = require.main.require('./models/registration');


// Request Handler
router.get('/', function(req, res){
	res.render('registration/registration');
});

router.post('/', function(req, res){
	
	user={

		
		username : req.body.username,
		password : req.body.password,
		email : req.body.email,
		contact: req.body.contact,
		address : req.body.address
	
		
	};
	
		//res.send(user);
		//console.log(user);
		
		registration.insertuser(user, function(valid){
		if(valid)
		{
			//res.render('home/index');
			//res.redirect('/registration');
			res.send("successfullooooo");
			//res.redirect('/home');
			//res.redirect('/registration');
		}
		else
		{		res.send("successfull");
			//res.redirect('/registration');
		}

});


});

// Export (mandatory)
module.exports = router;