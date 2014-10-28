angular.module('myApp.services')
	.service('user', ['$http','storage',
		function($http,storage) {
            this.data = '';
			this.log = function(email,password){
				return $http.get('http://dev.esbattle.com/app_dev.php/login/'+email+'/'+password).success(function(data){
					this.data = data;
					storage.setPersistant('user',JSON.stringify(this.data));
				});
			};

			this.get = function(){
				return JSON.parse(storage.getPersistant('user'));
			}
		}
	]
);
