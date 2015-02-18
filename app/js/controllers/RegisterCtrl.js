angular.module('myApp.controllers').controller('RegisterCtrl',
    ['$scope','user','$location','lang','redirection','rdv',
        function ($scope,user,$location,lang,redirection,rdv) {

	        $scope.lang = lang.getCurrent();

	        $scope.promiseRegisterInProgress = false;

			rdv.getFormInfo().then(function(data){
				$scope.aPlateforms = data.plateforms;
			});

	        $scope.updateRegExpPassword = function(){
		        $scope.regExpPassword = '/'+$scope.password+'/';
	        };

	        $scope.checkPassword = function(){
		        $scope.errorPassword = false;
		        if($scope.password !== $scope.passwordverif){
			        $scope.errorPassword = true;
			        return;
		        }
	        };


	        $scope.$watch('gamerTag',function(newValue,oldValue){
		        console.log('gamertag',newValue);
		        $scope.username = newValue;
	        });

	        $scope.submit = function(){


		        if($scope.registerForm.$valid === false ||  $scope.errorPassword === true){
			        return;
		        }

				$scope.username_already_taken = false;
				$scope.email_already_taken = false;
				$scope.gamertag_not_found = false;
		        $scope.promiseRegisterInProgress = true;
		        user.register($scope.email,$scope.password,$scope.username,$scope.plateform.id,$scope.gamerTag).success(function(data){
			        $scope.promiseRegisterInProgress = false;
			        redirection.goWelcomeHome();
		        }).error(function(data){
			        $scope.promiseRegisterInProgress = false;
					$scope.aError = data;

					if(data.aError) {

						for (var key in data.aError) {

							if (data.aError[key] === 'username_already_taken') {
								$scope.username_already_taken = true;
							}

							if (data.aError[key] === 'email_already_taken') {
								$scope.email_already_taken = true;
							}

							if (data.aError[key] === 'gamertag_not_found') {
								$scope.gamertag_not_found = true;
							}
						}
					}
				});
	        };

        }
    ]
);
