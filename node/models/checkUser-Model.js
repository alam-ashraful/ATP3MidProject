var db=require('./db');
var getUser=function(data,callback){
var sql="select * from `user` where username=? or email=? or contact=?";
var param=[data.username,data.email,data.contact];
db.getData(sql,param,function(result){
	if(result==null || result.length==0)
	{
		callback(false);
	}
	else
	{
		callback(true);
	}
});
}

module.exports.getUser=getUser;