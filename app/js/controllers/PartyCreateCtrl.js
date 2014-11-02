angular.module('myApp.controllers').controller('PartyCreateCtrl',
	['$scope','rdv',
		function ($scope,rdv) {
			'use strict';

			$scope.today = new Date();


			console.log('year',$scope.today.getDay());
			$scope.day = new Date($scope.today.getFullYear(), $scope.today.getMonth(), $scope.today.getDate(), $scope.today.getHours(), $scope.today.getMinutes()+5,$scope.today.getSeconds());

			$scope.dayPlusTwo = new Date();
			$scope.dayPlusTwo.setTime($scope.dayPlusTwo.getTime() + 2 * 24 * 3600 * 1000);

            $scope.submit = function(){
                console.log($scope.myForm);

                var game = $scope.game;
                var day = $scope.day;
                var dureeHours = $scope.dureeHours;
                var dureeMinutes = $scope.dureeMinutes;
                var plateform = $scope.plateform;
                var tags = $scope.tags;
                var description = $scope.description;
                var slotReserved = $scope.slotReserved;
                var slotTotal = $scope.slotTotal;

                rdv.add(plateform,game,tags,description,day,dureeHours+':'+dureeMinutes,slotTotal);

            };

		}
	]
);
