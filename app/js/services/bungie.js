angular.module('myApp.services')
	.service('bungie', ['$http','storage','api','$rootScope','$q','$timeout','$window',
		function($http,storage,api,$rootScope,$q,$timeout,$window) {
			'use strict';
			this.characters = null;

			this.getCharacters = function(plateforme,battleTag){
				plateforme = $window.encodeURIComponent(plateforme);
				battleTag = $window.encodeURIComponent(battleTag);
				return api.call('bungie/characters/'+plateforme+'/'+battleTag);
			};
		}

	]
);
