angular.module('myApp.services')
	.service('avis', ['api','$window','user',
		function(api,$window,user) {
			'use strict';


			this.get = function(userId){
				return api.call('avis/'+userId);
			};

			this.post = function(userId,avis){

				var currentUser = user.get();
				var params = {
					avis: avis
				};
				return api.post('avis/'+userId,params,currentUser);
			};
		}
	]
);
