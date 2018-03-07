var db = require('./db');

var insertuser = function(user, callback){

	//var sql= "select * from user where username='"+user.name+"'";
	var sql = "INSERT INTO user (id, username, password, email, contact, address) VALUES ('null','"+user.username+"', '"+user.password+"','"+user.email+"','"+user.contact+"','"+user.address+"')";
	//var param = [user.name, user.password,user.gender,user.address,user.department,user.email];
	//console.log(sql);
	
	db.insertData(sql,function(result){


		if(result)
		{
			callback(true);
			console.log(result);
		}
		else
		{
			callback(false);
		}

	});
	
}

module.exports.insertuser = insertuser;