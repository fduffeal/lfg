angular.module('myApp.services')
	.service('invite', ['$http','api','user','$window',
		function($http,api,user,$window) {
			'use strict';

			this.send = function(destinataire,rdv){

				var currentUser = user.get();
				if(currentUser === null) {
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				return api.call('invite/send/'+destinataire.id+'/'+rdv.id+'/'+username+'/'+token);
			};
		}

	]
);
