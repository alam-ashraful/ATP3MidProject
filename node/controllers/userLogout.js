// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	// session clear
	req.session.loggedUser.destroy(function(){
		res.redirect('/login');
	});
});

// Export (mandatory)
module.exports = router;