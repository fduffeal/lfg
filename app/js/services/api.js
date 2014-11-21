angular.module('myApp.services')
	.service('api', ['$http','storage','redirection',
		function($http,storage,redirection) {
			'use strict';

			this.call = function(path){
				return $http.get('http://api.esbattle.com/'+path).error(function(data, status, headers, config){

					switch(status){
						case 401 :
							storage.erasePersistant('user');
							redirection.goToLogin();
							break;

						case 403:
							//on ne fait rien, la requete n'est pas authorisée
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
