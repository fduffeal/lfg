angular.module('myApp.directives')
	.directive('lfgHeader', ['user','rdv','tag','$rootScope','redirection',
		function(user,rdv,tag,$rootScope,redirection) {
			'use strict';
			return {
				scope:{
					'lfgHeader':'='
				},
				link: function($scope, element, attrs) {

					$scope.lang = $rootScope.lang;
					$scope.logout = function(){
						user.logout();
						$scope.userInfo = null;
						redirection.goHome();
					};

					$scope.goToLogin = function(){
						redirection.goToLogin();
					};

					$scope.goToRegister = function(){
						redirection.goToRegister();
					};

					$scope.goCreateParty = function(){
						redirection.goCreateParty();
					};

					$scope.goHome = function(){
						redirection.goHome();
					};

                    $scope.userInfo = user.get();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);
