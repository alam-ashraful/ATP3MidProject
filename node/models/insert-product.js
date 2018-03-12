var db = require('./db');

var validateUser = function(productDetails, callback){
	var sql = "insert into product (productname, price, size, quantity, image) values (?,?,?,?,?)";

	var param = [productDetails.productName, productDetails.productPrice, productDetails.productSize, productDetails.productQuantity, productDetails.image];
	
	db.getData(sql, param ,function(result){
		if(result == null || result.length == 0)
		{
			callback(false);
		}
		else
		{
			callback(true);
		}

	});
}

module.exports.validateUser = validateUser;