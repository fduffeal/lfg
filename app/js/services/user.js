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
				var courantUser = storage.getPersistant('user');
				if(typeof(courantUser) !== "undefined"){
					return JSON.parse(courantUser);
				}
				return null;
			}
		}
	]
);
