var db=require('./db');
module.exports={
	 user:function(data,callback)
	{
	var sql='select * from user where username=?';
	var param=[data.username]
	db.getData(sql,param,function(result){
		if(result.length==0 || result==null)
		{
			callback(false);
		}
		else
		{
			callback(result);
		}
	});
},
   	useredit:function(data,callback)
	{
		var sql='SELECT * FROM user WHERE username=?';
		var param = [data.username];

		db.getData(sql,param,function(result){
			if(result.length==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(result);	
			}
		});
	},
	
	profileupdate : function(data,callback){
		var sql="UPDATE `user` SET `username`=?,`email`=?,`contact`=?,`address`=? WHERE `username`=?";
		var param=[data.username,data.email,data.contact,data.address,data.name];
		//console.log(param);
		db.updateData(sql,param,function(result){
			if(result==null || result.length==0)
			{
				callback(false);
			}
			else
			{
				callback(result);
			}
		});
	}
};