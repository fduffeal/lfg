angular.module('myApp.directives')
    .directive('lfgProfile', ['user',
        function(user) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'=',
	                'selectedPerso':'=',
	                'aUserGame':'=',
                    'withPlateform':'@'
                },
                link: function($scope, element, attrs) {

	                $scope.currentUser = user.get();

	                if($scope.currentUser !== null){
		                $scope.aUserGame = $scope.currentUser.userGame;
                        if($scope.selectedPerso === null){
                            $scope.selectedPerso = $scope.aUserGame[0];
                        }
	                }

	                $scope.selectPerso = function(persoSelected){
		                $scope.selectedPerso = persoSelected;
	                };
                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);
