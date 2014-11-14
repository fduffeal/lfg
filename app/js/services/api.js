angular.module('myApp.services')
	.service('api', ['$http','storage','redirection',
		function($http,storage,redirection) {
			'use strict';

			this.call = function(path){
				return $http.get('http://dev.esbattle.com/app_dev.php/'+path).error(function(data, status, headers, config){
					console.warn(data,status,headers,config);

					switch(status){
						case 401 :
							storage.erasePersistant('user');
							redirection.goToLogin();
							break;

						case 308:
							redirection.goHome();
							break;

						case 404:
							redirection.notFound(data.msg);
							break;

						default:
							break;
					}
				});
			};
		}
	]
);
