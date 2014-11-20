angular.module('myApp.controllers').controller('LoginCtrl',
    ['$scope','user','redirection','lang',
        function ($scope,user,redirection,lang) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.registerPageUrl = redirection.getRegisterPageUrl();

			var tentative = 0;
			var maxTentative = 2;
			$scope.bDisplayForgetPasswordForm = false;
			$scope.bDisplayForgetPasswordFormMailSend = false;

			$scope.displayForgetPasswordForm = function(){
				$scope.bDisplayForgetPasswordForm = true;
			};

	        $scope.login = function(){
		        if($scope.loginForm.$valid === false){
			        return;
		        }

		        user.log($scope.username,$scope.password).success(function(data){
			        $scope.userInfo = data;
					redirection.goBack();
		        }).error(function(data){
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
