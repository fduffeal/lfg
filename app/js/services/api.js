angular.module('myApp.services')
	.service('api', ['$http','storage',
		function($http,storage) {
			'use strict';

			this.call = function(path){
				return $http.get('http://dev.esbattle.com/app_dev.php/'+path);
			};
		}
	]
);
