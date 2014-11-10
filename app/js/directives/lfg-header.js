angular.module('myApp.directives')
	.directive('lfgHeader', ['user','rdv','tag','$rootScope',
		function(user,rdv,tag,$rootScope) {
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
					};

                    $scope.userInfo = user.get();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);
