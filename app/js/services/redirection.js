angular.module('myApp.services')
	.service('redirection', ['$location','$rootScope','$window',
		function($location,$rootScope,$window) {
			'use strict';

			this.goToLogin = function(){
				$location.path($rootScope.lang+'/login');
			};

			this.goBack = function(){
				$window.history.back();
			};
		}
	]
);
