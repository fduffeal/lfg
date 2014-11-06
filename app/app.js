'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
	'ngCookies',
	'pascalprecht.translate'
]).
	config(['$routeProvider','$translateProvider', function ($routeProvider,$translateProvider) {

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
         $routeProvider.when('/party/waiting/:partyId',
            {
                templateUrl: 'html/controllers/party-waiting.html',
                controller: 'PartyWaitingCtrl'
            });
        $routeProvider.when('/register',
            {
                templateUrl: 'html/controllers/register.html',
                controller: 'RegisterCtrl'
            });
        $routeProvider.when('/login',
            {
                templateUrl: 'html/controllers/login.html',
                controller: 'LoginCtrl'
            });
        $routeProvider.when('/profile',
            {
                templateUrl: 'html/controllers/profile.html',
                controller: 'ProfileCtrl'
            });

		$routeProvider.when('/welcome',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller: 'RdvCtrl',
				action:'welcome'
			});

		$routeProvider.otherwise({redirectTo: '/'});



		$translateProvider.translations('en', {
			MENU_HOME: 'HOME',
			MENU_NEW_PARTY: 'NEW PARTY'
		});
		$translateProvider.translations('fr', {
			MENU_HOME: 'ACCUEIL',
			MENU_NEW_PARTY: 'NOUVELLE PARTIE'
		});
		$translateProvider.preferredLanguage('fr');

	}]);


angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);