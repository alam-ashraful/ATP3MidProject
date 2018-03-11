var db = require('./db');

var getAdminData = function(callback){

	var sql = "select * from admin where username=? and password=?";
	var param = ["Admin", "123456"];
	
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

var editProductData = function(productId){

	var sql = "select * from product";
	param = [productId];
	
	db.editProductData(sql, param, function(result){

		if(result==null)
		{
			return;
		}
		else
		{
			return result;
		}
	});
};

// Export mandatory
module.exports.getAdminData = getAdminData;
module.exports.getProductData = getProductData;
module.exports.deleteProductData = deleteProductData;
module.exports.editProductData = editProductData;