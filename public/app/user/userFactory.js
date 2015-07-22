(function () {

	angular.module('app')
			.factory('user', userFactory);
			
	function userFactory() {
		
		var userModel = {
			email: '',
			firstName: '',
			lastName: '',
			password: ''
		};
		
		return{
			userModel: userModel
		};
	}
}());