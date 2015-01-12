angular.module('myApp.services')
	.service('bungie', ['$http','storage','api','$rootScope','$q','$timeout','$window','user',
		function($http,storage,api,$rootScope,$q,$timeout,$window,user) {
			'use strict';
			this.characters = null;

			this.getCharacters = function(plateforme,plateformeBungie,battleTag){

				var username = null;
				var token = null;
				var currentUser = user.get();
				if(currentUser !== null){
					var username = $window.encodeURIComponent(currentUser.username);
					var token = $window.encodeURIComponent(currentUser.token);
				}


				plateforme = $window.encodeURIComponent(plateforme);
				plateformeBungie = $window.encodeURIComponent(plateformeBungie);
				battleTag = $window.encodeURIComponent(battleTag);
				return api.call('bungie/characters/'+plateforme+'/'+plateformeBungie+'/'+battleTag+'/'+username+'/'+token);
			};
		}

	]
);
