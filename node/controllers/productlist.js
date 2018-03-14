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
			res.render('product list/productlist',{errs: valid});
			 
		}
		else
		{
			//res.render('login/index',{errs: "wrong password"});
			res.send("productlistwww ");
		}
	});
});

module.exports = router;