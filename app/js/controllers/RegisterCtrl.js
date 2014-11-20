angular.module('myApp.controllers').controller('RegisterCtrl',
    ['$scope','user','$location','lang','redirection',
        function ($scope,user,$location,lang,redirection) {

	        $scope.lang = lang.getCurrent();

	        $scope.updateRegExpPassword = function(){
		        $scope.regExpPassword = '/'+$scope.password+'/';
	        };

	        $scope.submit = function(){
				$scope.username_already_taken = false;
				$scope.email_already_taken = false;
		        user.register($scope.email,$scope.password,$scope.username).success(function(data){
			        redirection.goWelcomeHome();
		        }).error(function(data){
					console.log('error',data);
					$scope.aError = data;

					if(data.aError) {

						for (var key in data.aError) {

							console.log(data.aError[key]);
							if (data.aError[key] === 'username_already_taken') {
								$scope.username_already_taken = true;
							}

							if (data.aError[key] === 'email_already_taken') {
								$scope.email_already_taken = true;
							}
						}
					}
				});
	        };

        }
    ]
);
