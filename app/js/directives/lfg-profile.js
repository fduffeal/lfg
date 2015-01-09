angular.module('myApp.directives')
    .directive('lfgProfile', ['user',
        function(user) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'=',
	                'selectedPerso':'=',
	                'aUserGame':'='
                },
                link: function($scope, element, attrs) {

	                $scope.currentUser = user.get();

	                if($scope.currentUser !== null){
		                $scope.aUserGame = $scope.currentUser.userGame;
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
