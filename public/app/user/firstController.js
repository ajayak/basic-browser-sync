(function () {
	
	angular.module('app')
		.controller('firstCtrl', firstController);
		
	function firstController($scope, user) {
		$scope.user = user.userModel;
	}
	
}());