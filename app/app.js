'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
	'ngCookies',
	'gettext',
	'superCache'
]).
	config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/:lang/matchmaking',
			{
				templateUrl: 'html/controllers/matchmaking.html',
				controller : 'MatchmakingCtrl'
			});

		$routeProvider.when('/:lang/',
			{
				templateUrl: '/html/controllers/rdv.html',
				controller : 'RdvCtrl',
				reloadOnSearch: false
			});

		$routeProvider.when('/:lang/destiny/',
			{
				templateUrl: '/html/controllers/rdv.html',
				controller : 'RdvCtrl',
				reloadOnSearch: false
			});

		$routeProvider.when('/:lang/destiny/:plateform',
			{
				templateUrl: '/html/controllers/rdv.html',
				controller : 'RdvCtrl',
				reloadOnSearch: false
			});

		$routeProvider.when('/:lang/party/create',
			{
				templateUrl: '/html/controllers/party-create.html',
				controller : 'PartyCreateCtrl'
			});
		$routeProvider.when('/:lang/party/waiting/:partyId',
			{
				templateUrl: '/html/controllers/party-waiting.html',
				controller : 'PartyWaitingCtrl'
			});
		$routeProvider.when('/:lang/matchmaking/waiting/:partyId',
			{
				templateUrl: '/html/controllers/matchmaking-waiting.html',
				controller : 'MatchmakingWaitingCtrl'
			});
		$routeProvider.when('/:lang/register',
			{
				templateUrl: '/html/controllers/register.html',
				controller : 'RegisterCtrl'
			});
		$routeProvider.when('/:lang/login',
			{
				templateUrl: '/html/controllers/login.html',
				controller : 'LoginCtrl'
			});
		$routeProvider.when('/:lang/profile/',
			{
				templateUrl: '/html/controllers/profile.html',
				controller : 'ProfileCtrl'
			});

		$routeProvider.when('/:lang/profile/:gameId/:plateformId/',
			{
				templateUrl: '/html/controllers/profile.html',
				controller : 'ProfileCtrl'
			});

		$routeProvider.when('/:lang/welcome',
			{
				templateUrl: '/html/controllers/rdv.html',
				controller : 'RdvCtrl',
				action     : 'welcome'
			});
		$routeProvider.when('/:lang/games',
			{
				templateUrl: '/html/controllers/games-profiles.html',
				controller : 'GamesProfilesCtrl',
				action     : 'games'
			});

		$routeProvider.when('/:lang/404/:msg?',
			{
				templateUrl: '/html/controllers/404.html',
				controller : '404Ctrl'
			});
		$routeProvider.when('/:lang/notification',
			{
				templateUrl: '/html/controllers/notification.html',
				controller : 'NotificationCtrl'
			});

		$routeProvider.when('/:lang/password/forget/:username/:forgetToken',
			{
				templateUrl: '/html/controllers/password-update.html',
				controller : 'PasswordUpdateCtrl',
				action     : 'forget'
			});

		$routeProvider.when('/:lang/password/update',
			{
				templateUrl: '/html/controllers/password-update.html',
				controller : 'PasswordUpdateCtrl',
				action     : 'update'
			});

		$routeProvider.when('/:lang/users/connected',
			{
				templateUrl: '/html/controllers/list-users.html',
				controller : 'ListUsersCtrl'
			});

		$routeProvider.when('/:lang/annonce/create',
			{
				templateUrl: '/html/controllers/annonce-create.html',
				controller : 'AnnonceCreateCtrl'
			});

		$routeProvider.when('/:lang/forum/',
			{
				templateUrl: '/html/controllers/forum.html',
				controller : 'ForumCtrl'
			});

		$routeProvider.when('/:lang/forum/topic/',
			{
				templateUrl: '/html/controllers/topic.html',
				controller : 'TopicCtrl'
			});

		$routeProvider.when('/:lang/destiny/profile/:username',
			{
				templateUrl: '/html/controllers/profile-destiny.html',
				controller : 'ProfileDestinyCtrl'
			});

		$routeProvider.otherwise({redirectTo: '/fr/destiny'});

	}]);

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);
