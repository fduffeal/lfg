angular.module('myApp.directives')
    .directive('lfgProfile', ['user','rdv','tag','lang','redirection','$interval','$rootScope',
        function(user,rdv,tag,lang,redirection,$interval,$rootScope) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'='
                },
                link: function($scope, element, attrs) {

	                $scope.userGameSelected = null;
                    $scope.gamesUrl = redirection.getGamesPageUrl();

					$scope.setUserGame = function(userSelected){
						$scope.userGameSelected = userSelected;
						$rootScope.userGameSelected = userSelected;
						$scope.$emit('setUserGame',[userSelected]);
					};

	                var initProfil = function(){
		                $scope.userInfo = user.get();
		                if(typeof($rootScope.userGameSelected) !== "undefined"){
			                $scope.setUserGame($rootScope.userGameSelected);
		                }	else if($scope.userInfo !== null && $scope.userInfo.userGame[0]){
			                $scope.setUserGame($scope.userInfo.userGame[0]);
		                }
	                };

	                $scope.$on('refreshProfil',function(event,data){
		                $scope.userInfo = user.get();
		                $scope.setUserGame($scope.userInfo.userGame[0]);
	                });

	                initProfil();
                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);
