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

router.get('/edit:id', function(req, res){

	var productId = req.params.id;

	adminModel.editProductData(function(productId){

	});

	res.render('admin/product');
});

router.get('/delete/:id', function(req, res){
/*
	var productId = {
		productId: req.params.id
	}

	console.log(productId);

	if(productId!=null){
		adminModel.deleteProductData(function(object){
			res.render('admin/product');
		});
	}else{
		res.render('admin/product');
	}*/
	var id = req.params.id;
	
	var mysql = require('mysql');
	var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  password: '',
	  database: 'project'
	});

	connection.query("DELETE FROM product  WHERE product_id = ? ",[id], function(err, rows)
    {
         if(err)
             console.log("Error deleting : %s ",err );
        
         res.redirect('/admin/product');
         
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