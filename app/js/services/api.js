angular.module('myApp.services')
	.service('api', ['$http','storage','redirection','$location',
		function($http,storage,redirection,$location) {
			'use strict';

			this.url = null;
			this.getApiUrl = function(){
				if(this.url !== null){
					return this.url;
				}
				var host = $location.host();
				if(host === 'www.esbattle.com'){
					this.url = 'http://api.esbattle.com/app_dev.php/';
				}else {
					this.url = 'http://lfg.esbattle.com/app_dev.php/';
				}
				return this.url;
			};

			this.call = function(path){
				return $http.get(this.getApiUrl()+path).error(function(data, status, headers, config){

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
