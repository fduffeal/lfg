angular.module('myApp.directives')
	.directive('lfgHeader', ['user','rdv','tag','lang','redirection',
		function(user,rdv,tag,lang,redirection) {
			'use strict';
			return {
				scope:{
					'lfgHeader':'='
				},
				link: function($scope, element, attrs) {
					lang.initLang();
					$scope.lang = lang.getCurrent();

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
