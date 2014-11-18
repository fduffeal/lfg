angular.module('myApp.controllers').controller('PasswordUpdateCtrl',
    ['$scope','user','$route','$routeParams',
        function ($scope,user,$route,$routeParams) {
			'use strict';

			if($route.current.action === 'forget'){
				user.logByForgetToken($routeParams.username,$routeParams.forgetToken).error(function(data){
					$scope.error = data.msg;
				});
			}

			$scope.bDisplayUpdatePassword = false;

			$scope.updatePassword = function(){

				if($scope.password !== $scope.passwordVerif){
					$scope.error = 'password_not_equal';
				} else {
					user.updatePassword($scope.password).success(function(data){
						$scope.bDisplayUpdatePassword = true;
					}).error(function(data){
						$scope.error = data.msg;
					});
				}



			};

        }
    ]
);