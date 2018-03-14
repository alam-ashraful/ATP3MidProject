// Declaration
var express = require('express');
var router = express.Router();
var insertProduct = require.main.require('./models/insert-product');

//For image
const fs = require('fs');
const path = require('path');
var formidable = require('formidable');

// Request Handler
router.get('/', function(req, res){
	res.render('product/index');
});

router.post('/', function(req, res, next){

	// var oldpath = next.image.path;

	// console.log(oldpath);

	var productDetails = {
		productName: req.body.productName,
		productPrice: req.body.productPrice,
		productSize: req.body.productSize,
		productQuantity: req.body.productQuantity,
		image: req.body.image
	};

	/*if(req.files && req.files.image){
		console.log('working here 1');
		var filename = uuid.v1() + 
		path.extname(req.files.image.name);

		var newPath = path.resolve(__dirname, '../public/') + '/' + filename;

		fs.readFile(req.files.image.path, function(err, data){
			if (err) {
				res.status(500);
				res.send(err);
			}else{
				fs.writeFile(newPath, data, function(err){
					if(err){
						res.status(500);
						res.send(err);
					}else{
						productDetails.image = newPath;
						console.log('working here');
					}
				});
			}
		});
	}*/

	insertProduct.validateUser(productDetails, function(valid){
		if(valid)
		{
			// res.send('loged in');
			//req.session.loggedUser = user;
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


// Export (mandatory)
module.exports = router;