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

					$scope.homeUrl = redirection.getHomePageUrl();
					$scope.partyCreateUrl = redirection.getCreatePartyPageUrl();
					$scope.profilGameUrl = redirection.getProfilGamePageUrl();
					$scope.loginPageUrl = redirection.getLoginPageUrl();
					$scope.registerPageUrl = redirection.getRegisterPageUrl();

                    $scope.userInfo = user.get();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);
