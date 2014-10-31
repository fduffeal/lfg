'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
	'ngCookies'
]).
	config(['$routeProvider', function ($routeProvider) {

		$routeProvider.when('/matchmaking',
			{
				templateUrl: 'html/controllers/matchmaking.html',
				controller: 'MatchmakingCtrl'
			});

		$routeProvider.when('/',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller: 'RdvCtrl'
			});
        $routeProvider.when('/party/create',
            {
                templateUrl: 'html/controllers/party-create.html',
                controller: 'PartyCreateCtrl'
            });
        $routeProvider.when('/register',
            {
                templateUrl: 'html/controllers/register.html',
                controller: 'RegisterCtrl'
            });
        $routeProvider.when('/profile',
            {
                templateUrl: 'html/controllers/profile.html',
                controller: 'ProfileCtrl'
            });

		$routeProvider.otherwise({redirectTo: '/'});
	}]);


angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);