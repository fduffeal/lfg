angular.module('myApp.controllers').controller('PartyCreateCtrl',
	['$scope','rdv',
		function ($scope,rdv) {
			'use strict';

			$scope.today = new Date();

			$scope.dayPlusTwo = new Date();
			$scope.dayPlusTwo.setTime($scope.dayPlusTwo.getTime() + 2 * 24 * 3600 * 1000);

            $scope.submit = function(){
                console.log($scope.myForm)

                var game = $scope.game;
                var day = $scope.day;
                var hours = $scope.hours;
                var dayEnd = $scope.dayEnd;
                var hoursEnd = $scope.hoursEnd;
                var plateform = $scope.plateform;
                var tags = $scope.tags;
                var description = $scope.description;
                var slotReserved = $scope.slotReserved;
                var slotTotal = $scope.slotTotal;

                rdv.add(tags,description,day+' '+hours+':00',dayEnd+' '+hoursEnd+':00',slotTotal);

            };

		}
	]
);
