angular.module('myApp.controllers').controller('LoginCtrl',
    ['$scope','user','redirection','lang',
        function ($scope,user,redirection,lang) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.registerPageUrl = redirection.getRegisterPageUrl();

			var tentative = 0;
			var maxTentative = 2;

	        $scope.promiseLoginInProgress = false;
			$scope.bDisplayForgetPasswordForm = false;
			$scope.bDisplayForgetPasswordFormMailSend = false;

			$scope.displayForgetPasswordForm = function(){
				$scope.bDisplayForgetPasswordForm = true;
			};

	        $scope.login = function(){
		        if($scope.loginForm.$valid === false){
			        return;
		        }

		        $scope.promiseLoginInProgress = true;

		        user.log($scope.username,$scope.password).success(function(data){
			        $scope.promiseLoginInProgress = false;
			        $scope.userInfo = data;
					redirection.goHome();
		        }).error(function(data){
			        $scope.promiseLoginInProgress = false;
					$scope.error = data.msg;
					if(data.msg==='connection_refused'){
						tentative++;

						if(tentative > maxTentative){
							$scope.displayForgetPasswordForm();
						}
					}
				});
	        };

			$scope.forgetPassword = function(){
				user.forgetPassword($scope.email).success(function(data){
					$scope.bDisplayForgetPasswordFormMailSend = true;

				}).error(function(data){
					$scope.errorForgetPassword = data.msg;
				});
			};

        }
    ]
);
