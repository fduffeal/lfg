'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
]).
	config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/matchmaking',
			{
				templateUrl: 'html/controllers/matchmaking.html',
				controller: 'MatchmakingCtrl'
			});

		$routeProvider.when('/appointment',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller: 'RdvCtrl'
			});

		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);


angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);