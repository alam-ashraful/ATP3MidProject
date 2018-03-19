// Declaration
var express = require('express');
var router = express.Router();
var productlist= require.main.require('./models/productlist');


// Request Handler
router.get('/', function(req, res){


var category = {
		category_id:req.query.category_id
	};
 //res.send("productli");
	
productlist.showproduct(category, function(valid){
		if(valid)
		{
			//res.send('loged in');
			//req.session.loggedUser = user;
			//console.log(valid);
				//res.render('home/home');
				userr=req.session.loggedUser;
			res.render('product list/productlist',{errs: valid,log:userr});
			 
		}
		else
		{
			//res.render('login/index',{errs: "wrong password"});
			res.send("No Product found on database!");
		}
	});
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

module.exports = router;