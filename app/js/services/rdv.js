angular.module('myApp.services')
	.service('rdv', ['$http',
		function($http) {
			this.getAll = function(){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/');
			};
		}
	]
);
