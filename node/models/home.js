var db = require('./db');

var getdata = function(callback){

	//var sql= "select * from user where username='"+user.name+"'";
	var sql = "select * from user";
	//var param = [user.name, user.password,user.gender,user.address,user.department,user.email];
	//console.log(sql);
	
	db.getdataa(sql,function(result){


		if(result!=null)
		{
			callback(result);
		}
		else
		{
			callback(null);
		}

	});
	
}

module.exports.getdata= getdata;