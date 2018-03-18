// Declaration
var express = require('express');
var router = express.Router();
var productdetail= require.main.require('./models/detail');


// Request Handler
router.get('/', function(req, res){


var product = {
		product_id:req.query.product_id
	};
 //res.send(product.product_id);
	
productdetail.showproduct(product, function(valid){
		if(valid)
		{
			//res.send('loged in');
			//req.session.loggedUser = user;
			//console.log(valid);
				//res.render('home/home');
				userr=req.session.loggedUser;
			res.render('detail/detail',{errs: valid,log:userr});
			 
		}
		else
		{
			//res.render('login/index',{errs: "wrong password"});
			res.send("productlistwww ");
		}
	});
});

router.post('/', function(req, res){

		var id = {
		product_id:req.query.id
	};



productdetail.showproduct(id, function(valid){


	if(valid)
		{
			//res.send('loged in');
			//req.session.loggedUser = user;
			//valid[0].product_name
			//console.log(req.body.size);
			//console.log(req.body.quantity);
				//res.render('home/home');
					product={
		product_id : valid[0].product_id,				
		product_name : valid[0].product_name,
		picture : valid[0].picture,
		size : req.body.size,
		quantity: req.body.quantity,
		price:valid[0].price,
		total_price: req.body.quantity*	valid[0].price
	};
			//req.session.cart=[];
			var	productlist=[];
			if(req.session.cart!=null){
				productlist=req.session.cart;
				productlist.push(product);
				req.session.cart=productlist;
			}


			else{
		
		productlist.push(product);
		req.session.cart=productlist;
}
	
//console.log(req.session.cart);

userr=req.session.loggedUser;

			res.render('cart/cart',{errs:req.session.cart,log:userr});
			 
		}

		
	});
	
	


});


module.exports = router;