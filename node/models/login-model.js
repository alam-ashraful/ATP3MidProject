var db = require('./db');


var validateUser = function(user, callback){
	var sql = "SELECT * FROM user WHERE username=? AND password=?";
	var param = [user.username, user.password];

	db.getData(sql, param ,function(result){
		if(result == null || result.length == 0)
		{
			// callback(false);
			var sql2 = "SELECT * FROM admin WHERE username=? AND password=?";

			db.getData(sql2, param ,function(result2){
			if(result2 == null || result2.length == 0)
			{
				callback("admin");
			}else{
				callback("invalid");
			}
		});
	}
		else
		{
			callback("user");
		}

	});
}

module.exports.validateUser = validateUser;