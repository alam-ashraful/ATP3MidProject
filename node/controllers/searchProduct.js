var express = require('express');
var router = express.Router();
var searchModel = require.main.require('./models/search-model');

router.get('/', function(req, res){
		res.render('search/index');
		console.log("get product");
});

router.post('/', function(req, res){
	var product = {
		productname: req.body.search
	};

	searchModel.getProduct(product, function(result){
		res.render('search/info', {products: result});
	});
});



/*router.get('/info/:id', function(req, res){
	var data = {
		id: req.params.id
	};
	res.render('home/info', data);
});*/

module.exports = router;