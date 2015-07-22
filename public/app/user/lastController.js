(function () {
	
	angular.module('app')
			.controller('lastCtrl', lastController);
			
	function lastController($scope, user) {
		$scope.user = user;
	}
	
}());