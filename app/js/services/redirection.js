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

			this.goToRdvId = function(id){
				$location.path($rootScope.lang+'/party/waiting/'+id);
			};

			this.goToCreateProfilForGameAndPlateform = function(gameId,plateformId){
				$location.path($rootScope.lang+'/profile/'+gameId+'/'+plateformId);
			};
		}
	]
);
