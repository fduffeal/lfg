angular.module('myApp.directives')
    .directive('lfgProfile', ['user','rdv','tag','lang','redirection','$interval','$rootScope',
        function(user,rdv,tag,lang,redirection,$interval,$rootScope) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'='
                },
                link: function($scope, element, attrs) {

                    $scope.userInfo = user.get();
	                $scope.userGameSelected = null;

					$scope.setUserGame = function(userSelected){
						$scope.userGameSelected = userSelected;
						$rootScope.userGameSelected = userSelected;
						$scope.$emit('setUserGame',[userSelected]);
					};

					if(typeof($rootScope.userGameSelected) !== "undefined"){
						$scope.setUserGame($rootScope.userGameSelected);
					}	else if(typeof($scope.userInfo) !== "undefined" && $scope.userInfo.userGame[0]){
						$scope.setUserGame($scope.userInfo.userGame[0]);
					}
                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);
