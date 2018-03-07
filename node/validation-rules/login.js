module.exports = {
	regname: {

				username: {  required: true,  pattern: /^[a-zA-Z\-]+$/, message: 'Username required and username must be letter'}
		
			

	},

	regemail:
	{
		email: {required: true, pattern: /\S+@\S+\.\S+/,message: 'Email required and must be ...@gmail.com form'}

	},

	regcontact:
	{
		contact: {required: true,pattern: /(^(\+8801|8801|01|008801))[1-9]{1}(\d){8}$/,message: 'Enter Valid Phone Number'}

	},

	regaddress:
	{
		address: {required: true,message: 'Enter Valid Phone Number'}

	}




};