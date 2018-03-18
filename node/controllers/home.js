// Declaration
var express = require('express');
var router = express.Router();
var productlist = require.main.require('./models/productlist');


// Request Handler
router.get('/', function(req, res){


	
userr=req.session.loggedUser;
		
    // console.log(result[2].id);
	//res.send(user);
		res.render('home/home',{log:userr});
	//	res.render('edit profile/editprofile');



});


router.post('/', function(req, res){

	var product_name = {
			product_name: req.body.search
		};

		console.log(product_name);

	productlist.showSearchProduct(product_name, function(valid){
		if(valid)
		{
			userr = req.session.loggedUser;
			res.render('product list/productlist',{errs: valid, log: userr});	 
		}
		else
		{
			res.render('home/home');
		}
	});
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