angular.module('myApp.services')
	.service('api', ['$http','storage','redirection','$location',
		function($http,storage,redirection,$location) {
			'use strict';

			this.url = null;
			this.getApiUrl = function () {
				if (this.url !== null) {
					return this.url;
				}
				var host = $location.host();

				this.url = 'http://apiv2.esbattle.com/';

				if (host === 'localhost') {
					this.url = 'http://lfg.esbattle.com/app_dev.php/';
				}
				return this.url;
			};

			this.call = function (path) {
				return $http.get(this.getApiUrl() + path).error(function (data, status, headers, config) {

					switch (status) {
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

			this.post = function (path, params) {

				var url = this.getApiUrl() + path;
				return $http({
					method: 'POST',
					url: url,
					data: params,
					headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
				}).error(function (data, status, headers, config) {

					switch (status) {
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
