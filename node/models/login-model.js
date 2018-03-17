var db = require('./db');


var validateUser = function(user, callback){
	var sql = "SELECT * FROM user WHERE username=? AND password=?";
	var param = [user.username, user.password];

	db.getData(sql, param ,function(result){
		if(result == null || result.length == 0)
		{
			callback(false);
			// console.log(result);
		}else{
			callback(result);
			// console.log(result);
		}

	});
}

module.exports.validateUser = validateUser;