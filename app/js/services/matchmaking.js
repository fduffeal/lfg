angular.module('myApp.services')
	.service('matchmaking', ['$http','user','api','superCache',
		function($http,user,api,superCache) {
			'use strict';
			this.getConf = function(){
				return api.call('matchmaking/');
			};

			this.join = function(matchmakingId,profilId){
				var currentUser = user.get();
				return api.call('matchmaking/join/'+matchmakingId+'/'+profilId+'/'+currentUser.username+'/'+currentUser.token);
			};
		}
	]
);
