var db = require('./db');

var showproduct = function(category, callback){
	var sql = "SELECT * FROM product WHERE category_id=?";
	var param = [category.category_id];
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

};

var showSearchProduct = function(searchValue, callback){
	var sql = "SELECT * FROM product WHERE product_name like '%' ? '%'";
	var param = [searchValue.product_name];

	console.log(sql);
	
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
};

// Export mandatory
module.exports.showproduct = showproduct;
module.exports.showSearchProduct = showSearchProduct;