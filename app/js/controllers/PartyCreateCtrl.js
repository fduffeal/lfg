angular.module('myApp.controllers').controller('PartyCreateCtrl',
	['$scope','rdv','$location',
		function ($scope,rdv,$location) {
			'use strict';


			rdv.getFormInfo().success(function(data){
				$scope.formInfo = data;

				$scope.plateform = $scope.formInfo.plateforms[0].id;
			});

			$scope.today = new Date();

			$scope.day = new Date($scope.today.getFullYear(), $scope.today.getMonth(), $scope.today.getDate(), $scope.today.getHours(), $scope.today.getMinutes()+5,$scope.today.getSeconds());

			$scope.dayPlusTwo = new Date();
			$scope.dayPlusTwo.setTime($scope.dayPlusTwo.getTime() + 2 * 24 * 3600 * 1000);

            $scope.submit = function(){
                var game = $scope.game;
                var day = $scope.day.getTime()/1000;
                var dureeHours = $scope.dureeHours;
                var dureeMinutes = $scope.dureeMinutes;
                var plateform = $scope.plateform;
                var tags = $scope.tags;
                var description = $scope.description;
                var slotReserved = $scope.slotReserved;
                var slotTotal = $scope.slotTotal;

                rdv.add(plateform,game,tags,description,day,dureeHours+':'+dureeMinutes,slotTotal).success(function(data){
	                $location.path('/party/waiting/'+data.id);
                });
            };

			$scope.updatePlateform = function(id){
				$scope.plateform = id;
			};

			$scope.autocomplete = function(){
				var aTags = $scope.tags.split(' ');

				var previousTags = '';
				var aPreviousTags = [];
				for(var i = 0; i < aTags.length -1; i++){
					previousTags =  previousTags+aTags[i]+' ';
					aPreviousTags.push(aTags[i]);
				}

				$scope.autocompleteTag = [];
				for(var key in $scope.formInfo.tags){

					if(aPreviousTags.indexOf($scope.formInfo.tags[key].nom) > -1){
						continue;
					}
					$scope.autocompleteTag.push(previousTags +$scope.formInfo.tags[key].nom);
				}
			};

		}
	]
);
