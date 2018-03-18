var db=require('./db');

module.exports={
	placeorder: function(data,callback) {
		//console.log(data);
		var sql='INSERT INTO `orderr`(`orderid`,`productid`, `userid`, `quantity`, `price`, `address`, `status`) VALUES (?,?,?,?,?,?,?)';
		var param=[data.orderid,data.productid,data.userid,data.quantity,data.price,data.address,data.status];
			db.insertdata(sql,param,function(result){
			if(result==0 || result==null)
			{
				callback(false);
			}
			else
			{
				callback(true);	
			}
		});
	}
};