var express=require('express');
var router=express.Router();
checkModel=require.main.require('./models/checkUser-Model');
var asyncValidator = require('async-validator');
var loginRules = require.main.require('./validation-rules/login');




// Request Handler
router.post('/username',function(req,res){
	var data={ username: req.body.value };
	//console.log("doob");
	var	 validator = new asyncValidator(loginRules.regname);

	validator.validate(data, function(errors, fields){
		if(errors)
		{	
			console.log(errors);
			res.send({ flag : 2, errs : errors});
		}
	   else
	   {
	   
	checkModel.getUser(data,function(valid)
	{   if (valid) 
		{
		res.send({ flag: 1 })
		}
		else
			res.send({ flag: 0 })

	});
}
});
	});

/*
router.post('/email',function(req,res){
	var data={ email: req.body.value };
	checkModel.getUser(data,function(valid)
	{
		res.send(valid);
	});
});
*/


router.post('/email',function(req,res){
	var data={ email: req.body.value };
	//console.log("doob");
	var	 validator = new asyncValidator(loginRules.regemail);

	validator.validate(data, function(errors, fields){
		if(errors)
		{	
			console.log(errors);
			res.send({ flag : 2, errs : errors});
		}
	   else
	   {
	   
	checkModel.getUser(data,function(valid)
	{   if (valid) 
		{
		res.send({ flag: 1 })
		}
		else
			res.send({ flag: 0 })

	});
}
});
	});



router.post('/user',function(req,res){
	var data={ username : req.body.value };
	
	checkModel.getUser(data,function(valid)
	{
		res.send(valid);
	});
});


router.post('/contact',function(req,res){
	var data={ contact: req.body.value };
	//console.log("doob");
	var	 validator = new asyncValidator(loginRules.regcontact);

	validator.validate(data, function(errors, fields){
		if(errors)
		{	
			console.log(errors);
			res.send({ flag : 2, errs : errors});
		}
	   else
	   {
	   
	checkModel.getUser(data,function(valid)
	{   if (valid) 
		{
		res.send({ flag: 1 })
		}
		else
			res.send({ flag: 0 })

	});
}
});
	});



router.post('/address',function(req,res){
	var data={ address: req.body.value };
	//console.log("doob");
	var	 validator = new asyncValidator(loginRules.regaddress);
		console.log(data);
	validator.validate(data, function(errors, fields){
		if(errors)
		{	
			console.log(errors);
			res.send({ errs : errors});
		}
		else
			res.send({ flag: 0});

	
});
	});



router.get('/',function(req,res){
	res.send("WHEEE");
});
//Exports

module.exports=router;

