var db = require('./db');

var validateUser = function(productDetails, callback){
	var sql = "insert into product (product_name, price, discription, quantity, picture, category_id) values (?,?,?,?,?,?)";

	var param = [productDetails.productName, productDetails.productPrice, productDetails.productSize, productDetails.productQuantity, "/images/"+ productDetails.image, 1];
	
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