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
					res.render('./view profile/viewprofile',{result: result,log:req.session.loggedUser.username});
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