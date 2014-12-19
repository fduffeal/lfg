angular.module('myApp.services')
	.service('matchmaking', ['$http','user','api','superCache','$window',
		function($http,user,api,superCache,$window) {
			'use strict';
			this.getConf = function(){
				return api.call('matchmaking/');
			};

			this.join = function(matchmakingId,profilId){
				var currentUser = user.get();
				var username = $window.encodeURIComponent(currentUser.username);
				return api.call('matchmaking/join/'+matchmakingId+'/'+profilId+'/'+username+'/'+currentUser.token);
			};
		}
	]
);
