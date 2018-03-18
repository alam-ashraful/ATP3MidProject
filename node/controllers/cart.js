var express = require('express');
var router = express.Router();
//var home = require.main.require('./models/home');


// Request Handler
router.get('/', function(req, res){

	//req.session.cart=[];
		var product_name= req.query.product_name;
		//console.log(product_name);


	var	productlist=[];
			if(req.session.cart!=null){
				productlist=req.session.cart;
				//productlist.pop(0);


				for (var i =0; i < productlist.length; i++)
   if (productlist[i].product_name === product_name) {
      productlist.splice(i,1);
      break;
   }

				req.session.cart=productlist;
			}


		
userr=req.session.loggedUser;


	//req.session.cart.pop(product.product_name);
  // console.log(req.query.product_name);
	//res.send(result);
		res.render('cart/cart',{log:userr});



});

module.exports = router;