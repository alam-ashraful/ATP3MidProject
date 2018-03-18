// Declaration
var express = require('express');
var router = express.Router();
user=require.main.require('./models/user-model');


// Request Handler
router.get('/', function(req, res){


			if(req.session.loggedUser!=null)
		{
			var data={
				username: req.session.loggedUser.username
			};
			user.user(data,function(result){
				if(result!=null && result)
				{
					
					//console.log(result);
					res.render('./edit profile/editprofile',{result: result,log:req.session.loggedUser.username});
				}				
			});
}
		else
		{
			res.redirect('/login');
		} 
	

});


router.post('/', function(req, res){
	
	data={

		
		username : req.body.username,
		email : req.body.email,
		contact: req.body.contact,
		address : req.body.address,
		name:req.session.loggedUser.username
	
		
	};

	console.log(user);
	

			if(req.session.loggedUser!=null)
		{
			
			user.profileupdate(data,function(result){
				if(result!=null && result)
				{
					req.session.loggedUser.username=req.body.username;
					//console.log(result);
					//res.render('./ profile/editprofile',{result: result,log:req.session.loggedUser.username});
					res.redirect('/viewprofile');
				}				
			});
}
		else
		{
			res.redirect('/login');
		} 
	

});



// Export (mandatory)
module.exports = router;