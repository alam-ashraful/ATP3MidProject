// Declaration
var express = require('express');
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');


// Request Handler
router.get('/', function(req, res){

	adminModel.getAdminData(function(result){

		res.render('admin/index',{ adminInfo: result});
	});
});

router.get('/product', function(req, res){

	adminModel.getProductData(function(result){

		res.render('admin/product',{ productInfo: result});
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