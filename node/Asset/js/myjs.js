
$(document).ready(function() {
	console.log("ready");
	//$("#submit").prop("disabled", true);
	var email;
	var username;
	var pass;
	var con;
	var contact;
	var address;
//User validation
	var usernameField = $("#username");
	usernameField.on("change", function() {
	var value = usernameField.val();
		$.post("/uniqueuser/username", { value }, function(data, xhr) {
									  $("#submit").prop("disabled", false);
									$('#useralart').addClass("hidden");
									$('#useralartmin').addClass("hidden");
									email=usernameField.val();
										var x=data.flag;
										var y=data.errs;
										var p;
							switch(x) {

    						case 1:
      								  $("#submit").prop("disabled", true);
									$('#useralart').removeClass("hidden");
     								   break;
     						case 2:
      								  $("#submit").prop("disabled", true);
									$('#useralartmin').removeClass("hidden");

									 for(var i = 0; i < y.length; i++){ 
				               		p= y[i].message;
				               		$('#useralartmin').text(p);
			                		 }
								
									console.log(p);
     								   break;		   
    						default:
    						 $("#submit").prop("disabled", false);
									$('#useralart').addClass("hidden");
									$('#useralartmin').addClass("hidden");
        								break;
    								}
		
								})
				});
//Email validation

/*
	var emailField = $("#email");
	emailField.on("change", function() {
	var value = emailField.val();

		$.post("/uniqueuser/email", { value }, function(data, xhr) {

				
			if(data) {
			$("#submit").prop("disabled", true);
				$('#emailalart').removeClass("hidden");
				
			}
			else {
					$("#submit").prop("disabled", false);
				$('#emailalart').addClass("hidden");
				
			}
		})
	});

*/

var emailField = $("#email");
	emailField.on("change", function() {
	var value = emailField.val();

		$.post("/uniqueuser/email", { value }, function(data, xhr) {
									$("#submit").prop("disabled", false);
									$('#emailalart').addClass("hidden");
									$('#emailalartval').addClass("hidden");
										var x=data.flag;
										var y=data.errs;
										var p;
							switch(x) {

    						case 1:
      								  $("#submit").prop("disabled", true);
									$('#emailalart').removeClass("hidden");
     								   break;
     						case 2:
      								  $("#submit").prop("disabled", true);
									$('#emailalartval').removeClass("hidden");

									 for(var i = 0; i < y.length; i++){ 
				               		p= y[i].message;
				               		$('#emailalartval').text(p);
			                		 }
								
									console.log(p);
     								   break;		   
    						default:
    						 	 $("#submit").prop("disabled", false);
									$('#emailalart').addClass("hidden");
									$('#emailalartval').addClass("hidden");
        								break;
    								}
		
								})
				});
//password

 	
var passField = $("#password");
	passField.on("change", function() {
	var value = passField.val();
				$("#submit").prop("disabled", false);
				$('#passalartval').addClass("hidden");
				if(value!="")
				{

				}
				else{
									$("#submit").prop("disabled", true);
									
									$('#passalartval').removeClass("hidden");
										
							
								
		}
				});


//confirm password

var conpassField = $("#confirm");
	conpassField.on("change", function() {
	var value = conpassField.val();
					$("#submit").prop("disabled", false);
				$('#conpassalartval').addClass("hidden");
	
 	var bla = $('#password').val();
	
				if(value==bla)
				{

				}
				else{
				$("#submit").prop("disabled", true);
				$('#conpassalartval').removeClass("hidden");
				$('#conpassalartval').text("password doesnot matched");
										
									
								
		}
				});

//contact
/*
	var contactField = $("#contact");
	contactField.on("change", function() {
	var value = contactField.val();
		$.post("/uniqueuser/contact", { value }, function(data, xhr) {
			if(data) {
				$("#submit").prop("disabled", true);
				$('#contactalart').removeClass("hidden");
				
			}
			else {
				$("#submit").prop("disabled", false);
				$('#contactalart').addClass("hidden");
			}
		})
	});
	*/

	//contact
	var contactField = $("#contact");
	contactField.on("change", function() {
	var value = contactField.val();
	
		$.post("/uniqueuser/contact", { value }, function(data, xhr) {
									$("#submit").prop("disabled", false);
									$('#contactalart').addClass("hidden");
									$('#contactalartval').addClass("hidden");
										var x=data.flag;
										var y=data.errs;
										var p;
							switch(x) {

    						case 1:
      								  $("#submit").prop("disabled", true);
									$('#contactalart').removeClass("hidden");
     								   break;
     						case 2:
      								  $("#submit").prop("disabled", true);
									$('#contactalartval').removeClass("hidden");

									 for(var i = 0; i < y.length; i++){ 
				               		p= y[i].message;
				               		$('#contactalartval').text(p);
			                		 }
								
									console.log(p);
     								   break;		   
    						default:
    						 		$("#submit").prop("disabled", false);
									$('#contactalart').addClass("hidden");
									$('#contactalartval').addClass("hidden");
        								break;
    								}
		
								})
				});



	//address

	var addressField = $("#address");
	addressField.on("change", function() {
	var value = addressField.val();
	console.log(value);
		$.post("/uniqueuser/address", { value }, function(data, xhr) {
								$("#submit").prop("disabled", false);	 
							$('#addressalartval').addClass("hidden");
				
								
										console.log(data);
									if(data)
							{
      								  $("#submit").prop("disabled", true);
									$('#addressalartval').removeClass("hidden");
     							
     						}
     						if(data.flag==0)
     						{
     							$('#addressalartval').addClass("hidden");
				$("#submit").prop("disabled", false);
								
     						}
     					});
				});

 $("#submit").prop("disabled", true);
	var submitField = $("#submit");
	submitField.bind("click", function() {
		var email=$("#email").val();
		console.log(email);
		 $("#submit").prop("disabled", true);
	});

	var userNameField = $("#userName");
	$("#submitt").prop("disabled", true);
	userNameField.on("change", function() {
	var value = userNameField.val();
	console.log(value);

	$.post("/uniqueuser/user", { value }, function(data, xhr) {
									 
							
									if (data)
									{
										  $("#submitt").prop("disabled", false);
									$('#usernamealart').addClass("hidden");
									}
									else
									{
										 $("#submitt").prop("disabled", true);
									$('#usernamealart').removeClass("hidden");
									}
		
								})
	});


	 
});

