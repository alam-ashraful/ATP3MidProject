var db = require('./db');

var getAdminData = function(callback){

	var sql = "select * from user where username=? and password=? and role=?";
	var param = ["admin", "admin", "admin"];
	
	db.getAdminData(sql, param, function(result){

		if(result==null)
		{
			callback(null);
		}
		else
		{
			callback(result);
		}
	});
	
};

var getProductData = function(callback){

	var sql = "select * from product";
	
	db.getProductData(sql, function(result){

		if(result==null)
		{
			callback(null);
		}
		else
		{
			callback(result);
		}
	});
	
};

var deleteProductData = function(productId){

	var sql = "delete from product where id='"+productId().productId+"'";
	
	db.deleteProductData(sql, function(result){

		if(result==null)
		{
			return null;
		}
		else
		{
			return result;
		}
		console.log(sql);
	});
	
};

var editProductData = function(data, callback){

	var sql = "select * from product where product_id=?";
	param = [data.pid];

	db.getData(sql, param, function(result){

		if(result==null)
		{
			callback(null);
		}
		else
		{
			callback(result);
		}
	});
};

// Export mandatory
module.exports.getAdminData = getAdminData;
module.exports.getProductData = getProductData;
module.exports.deleteProductData = deleteProductData;
module.exports.editProductData = editProductData;