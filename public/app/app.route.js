/// <reference path="../../typeDefinations/angular.d.ts" />
/// <reference path="../../typeDefinations/angular-route.d.ts" />


(function () {
	
	angular.module('app')
			.config(routeConfig);
	
	function routeConfig($routeProvider) {
		
		$routeProvider.when('/', {
			templateUrl: 'app/user/index.html'
		})
		.when('/first',{
			templateUrl: 'app/user/first.html',
			controller: 'firstCtrl'
		})
		.when('/last',{
			templateUrl: 'app/user/last.html',
			controller: 'lastCtrl'
		})
		.otherwise({redirectTo: '/'});
					
	}
	
}());