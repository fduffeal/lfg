angular.module('myApp.directives')
    .directive('lfgPopup', [
        function() {
            'use strict';
            return {
                scope:{

                },
                link: function($scope, element, attrs) {

	                $scope.$on('popup',function(event,data){
		                $scope.displayPopup = true;
		                $scope.message = data[0];
	                });

	                $scope.hide = function(){
		                $scope.displayPopup = false;
	                };

                },
                restrict: 'E',
                templateUrl: '/html/directives/lfg-popup.html'
            };
        }
    ]
);
