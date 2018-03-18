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

router.get('/edit/:id', function(req, res){

	data = {
		pid: req.params.id
	};

	adminModel.editProductData(data, function(result){
		if(result!=null){
			res.render('admin/update',{result: result});
		}else{
			res.render('admin/product');
		}
	});
});

router.post('/edit/:id', function(req, res){

	var productDetails = {
		product_id: req.params.id,
		productCatagoryId: req.body.productCatagoryId,
		productName: req.body.productName,
		productPrice: req.body.productPrice,
		productSize: req.body.productSize,
		productQuantity: req.body.productQuantity,
		image: req.body.image
	};

	adminModel.updateProduct(productDetails, function(valid){
		if(valid!=null)
		{
			res.redirect('/admin/product');
			console.log('Product inserted');
		}
		else
		{
			console.log('Product not inserted');
			res.render('product/index');
		}
	});

});

router.get('/delete/:id', function(req, res){

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

// Export (mandatory)
module.exports = router;