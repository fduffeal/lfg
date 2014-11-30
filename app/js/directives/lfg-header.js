angular.module('myApp.directives')
	.directive('lfgHeader', ['user','rdv','tag','lang','redirection','$interval','$filter',
		function(user,rdv,tag,lang,redirection,$interval,$filter) {
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
					$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
					$scope.gamesUrl = redirection.getGamesPageUrl();
					$scope.notifUrl = redirection.getNotifPageUrl();
					$scope.matchmakingUrl = redirection.getMatchmakingPageUrl();

                    $scope.userInfo = user.get();


					/**
					 * autoRefreshDataNotif
					 */
					var refreshDataNotif = function(){
						rdv.getNotifications().success(function(data){
							if($scope.userInfo === null){
								return;
							}
							$scope.notifications = $filter('filterNotification')(data,$scope.userInfo.id);
						});
					};

					var refreshTime = 12000;
					var autoRefreshDataNotif = function(){
						$interval.cancel($scope.intervaNotificationId);

						if (angular.isDefined($scope.intervaNotificationId)) {
							return;
						}

						$scope.intervaNotificationId = $interval(function(){
							refreshDataNotif();
						}, refreshTime);
					};

					refreshDataNotif();
					autoRefreshDataNotif();

				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);
