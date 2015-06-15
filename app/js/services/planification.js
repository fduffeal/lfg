angular.module('myApp.services')
	.service('planification', ['api',
		function(api) {
			'use strict';
			this.getCurrent = function(username,token){
				return api.call('planification');
			};

			this.getNext = function(){
				return api.call('planification/next');
			};
		}
	]
);
