// Declaration
var express = require('express');
var router = express.Router();
//var home = require.main.require('./models/home');


// Request Handler
router.get('/', function(req, res){


	

		
    // console.log(result[2].id);
	//res.send(result);
		res.render('home/home');



});
/*
router.post('/', function(req, res){
	
	user={

		name : req.body.username,
		password : req.body.password,
		gender : req.body.gender,
		address : req.body.address,
		department : req.body.department,
		email : req.body.email
	};
	
		//res.send(user);
		//console.log(user);
		
		registration.insertuser(user, function(valid){
		if(valid)
		{
			//res.render('home/index');
			//res.redirect('/registration');
			res.send("successfull");
		}
		else
		{
			res.redirect('/registration');
		}

});


});
*/
// Export (mandatory)
module.exports = router;