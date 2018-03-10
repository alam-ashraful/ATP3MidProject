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

// Export mandatory
module.exports.getAdminData = getAdminData;
module.exports.getProductData = getProductData;