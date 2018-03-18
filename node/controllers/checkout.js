var express=require('express');
var asyncValidator=require('async-validator');
var router=express.Router();
checkoutModel=require.main.require('./models/checkout-model');
user=require.main.require('./models/user-model');


// Request Handler

router.get('/',function(req,res){


	if(req.session.cart==null)
	{
		res.redirect('/home');
	}


else
{

var product_name= req.query.product_name;
		console.log(product_name);


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

	//console.log(req.session.loggedUser);
		if(req.session.loggedUser!=null)
		{
			var data={
				username: req.session.loggedUser.username
			};
			user.user(data,function(result){
				if(result!=null && result)
				{
					var allresult={
						cart: req.session.cart,
						user: result
					};
					//console.log(allresult);
					res.render('./checkout/checkout',{result: allresult,log:req.session.loggedUser.username});
				}				
			});
}
		else
		{
			res.redirect('/login');
		} 
	}

});


/*
router.get('/placeorder',function(req,res){
	res.render('./error/error');
});
*/
router.post('/placeorder',function(req,res){


	if(req.session.cart==null)
	{
		res.redirect('/home');
	}

	else
	{


		if(req.session.loggedUser!=null)
		{

				var info={
					username: req.session.loggedUser.username

				}
				var sessioncart=req.session.cart;
				var productcart={sessioncart};
			//	console.log(productcart);
				

				
				user.user(info,function(userid){
					for(var i=0;i<req.session.cart.length;i++)
					{
						
						
						var data={
							orderid:userid[0].id,
							productid: productcart.sessioncart[i].product_id,
							userid: userid[0].id,
							quantity: productcart.sessioncart[i].quantity,
							price: productcart.sessioncart[i].price,
							address: userid[0].address,
							status: "notissued"
						};
						//console.log(userid[0].id);
						checkoutModel.placeorder(data,function(valid){
							
							if(valid)
							{
								req.session.cart=[];
								//res.render('home/home');
							res.render('thnx/thnx',{errs:userid[0].id});
								

							}
							else
							{
								res.redirect('/cart');
								
							}
						});	
					}
				});
				
}
		else
		{
			res.redirect('/login');
		}	
	}
	
});


//Exports

module.exports=router;