angular.module('myApp.services')
	.service('annonce', ['$http','storage','api','$rootScope','$q','$timeout','$window','user',
		function($http,storage,api,$rootScope,$q,$timeout,$window,user) {
			'use strict';

			this.create = function(tags,description,userGameId){

				var username = null;
				var token = null;
				var currentUser = user.get();
				if(currentUser !== null){
					var username = $window.encodeURIComponent(currentUser.username);
					var token = $window.encodeURIComponent(currentUser.token);
				}

				tags = $window.encodeURIComponent(tags);
				description = $window.encodeURIComponent(description);
				userGameId = $window.encodeURIComponent(userGameId);
				return api.call('annonce/create/'+tags+'/'+description+'/'+userGameId);
			};

			this.get = function(){
				return api.call('annonce');
			};
		}

	]
);
