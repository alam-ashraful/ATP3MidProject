var db = require('./db');

var showproduct = function(product, callback){
	var sql = "SELECT * FROM product WHERE product_id=?";
	var param = [product.product_id];
		 //sres.send(category.category_id);
		 //console.log(category.category_id);
	
	db.getData(sql, param ,function(result){ 

		if(result == null || result.length == 0)
		{
			callback(false);
		}
		else
		{
			callback(result);
		}

	});

}

module.exports.showproduct= showproduct;