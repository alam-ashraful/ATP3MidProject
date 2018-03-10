var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project'
});

module.exports = {
	getdataa: function(sql,callback){
		
		console.log(sql);
			connection.query(sql, function(err, res){
				if(err)
				{
					console.log(err);
					callback(null);
				}
				else
				{
					callback(res);
					//console.log(res);

				}
			});
		},

		insertData: function(sql, callback){
		
			connection.query(sql, function(err, res){
				if(err)
				{
					//console.log(err);
					//callback(false);
				}
				else
				{	console.log(res);
					callback(true);
					//res.redirect('/registration');
				}
			});
		
		//console.log(sql);
		},

		getData : function(sql,param,callback){
			

		if(param==null)
		{
			connection.query(sql,function(error,result){
				if (error) {
					console.log(error);
					callback(null);
				}
				else
				{
					console.log(result);
					callback(result);
				}
			});
			
		}
		else
		{
			connection.query(sql,param,function(error,result){
				if (error) {
					console.log(error);
					callback(null);
				}
				else
				{
					
					callback(result);
				}
			});
		}

	},

	getAdminData: function(sql, param, callback){
		connection.query(sql, param, function(err, res){
			if(err)
			{
				console.log(err);
				callback(null);
			}
			else
			{
				callback(res);
			}
		});
	},

	getProductData: function(sql, callback){
		connection.query(sql, function(err, res){
			if(err)
			{
				console.log(err);
				callback(null);
			}
			else
			{
				callback(res);
			}
		});
	}
};

	
	


/*
module.exports = {
	insertData: function(sql, callback){
		
			connection.query(sql, function(err, res){
				if(err)
				{
					//console.log(err);
					//callback(false);
				}
				else
				{	//console.log(res);
					callback(true);
					//res.redirect('/registration');
				}
			});
		
		//console.log(sql);
		}	

};
*/