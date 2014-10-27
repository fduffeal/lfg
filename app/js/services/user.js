angular.module('myApp.services')
	.service('user', ['$http',
		function($http) {
            this.data = '';
			this.log = function(email,password){

                return $http({
                    method: 'POST',
                    url: 'http://dev.esbattle.com/app_dev.php/login',
                    data: {email:email,password:password},
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(data){
                    this.data;
                });

				return $http.post('http://dev.esbattle.com/app_dev.php/login',{email:email,password:password}).success(function(data){
                    this.data;
                });
			};
		}
	]
);
