var db = require('./db');

var getProduct = function(product, callback){
	var sql = "select * from product where product_name=?";
	console.log(sql);
	var param = [product.productname];
	console.log(param);
	db.getData(sql, param, function(result){
		if(result == null || result.length == 0)
		{
			callback(false);
			console.log("false");
		}
		else
		{
			callback(result);
			console.log(result);
		}
	});
}

module.exports.getProduct = getProduct;