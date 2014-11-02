angular.module('myApp.services')
	.service('rdv', ['$http','user',
		function($http,user) {
			'use strict';
			this.getAll = function(){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/');
			};

            this.add = function(plateform,game,tags,description,start,duree,nbParticipant){
                var currentUser = user.get();
                return $http.get('http://dev.esbattle.com/app_dev.php/rdv/add/'+plateform+'/'+game+'/'+tags+'/'+description+'/'+start+'/'+duree+'/'+nbParticipant+'/'+currentUser.username+'/'+currentUser.token);
            };
		}
	]
);
