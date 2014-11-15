angular.module('myApp.controllers').controller('PasswordUpdateCtrl',
    ['$scope','user','redirection',
        function ($scope,user,redirection) {
			'use strict';

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
