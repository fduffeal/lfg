angular.module('myApp.services')
	.service('planification', ['api',
		function(api) {
			'use strict';
			this.getCurrent = function(username,token){
				return api.call('planification');
			};
		}
	]
);
