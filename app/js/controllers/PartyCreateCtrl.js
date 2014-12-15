angular.module('myApp.controllers').controller('PartyCreateCtrl',
	['$scope','rdv','$location','$filter','user','$rootScope','redirection','lang',
		function ($scope,rdv,$location,$filter,user,$rootScope,redirection,lang) {
			'use strict';

			$scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			if($scope.currentUser === null){
				redirection.goToLogin();
				return;
			}

			$scope.dureeHours = 1;
			$scope.dureeMinutes = 0;

			$scope.game = null;
			$scope.plateform = null;

			rdv.getFormInfo().then(function(data){
				$scope.formInfo = data;
				$scope.game = $scope.formInfo.games[0];
			});

			$scope.today = new Date();

			$scope.day = new Date($scope.today.getFullYear(), $scope.today.getMonth(), $scope.today.getDate(), $scope.today.getHours(), $scope.today.getMinutes()+5,$scope.today.getSeconds());

			$scope.startHours = $scope.today.getHours();
			$scope.startMinutes = $scope.today.getMinutes();

			$scope.dayPlusTwo = new Date();
			$scope.dayPlusTwo.setTime($scope.dayPlusTwo.getTime() + 2 * 24 * 3600 * 1000);

			$scope.$watch('game',function(newValue,oldValue){
				updateProfilsAvailable();
			});

			$scope.$watch('profilSelected',function(newValue,oldValue){
				if(typeof newValue !== "undefined" ){
					$scope.updatePlateform(newValue.plateform);
				}
			});

			var updateProfilsAvailable = function(){
				if($scope.currentUser !== null && $scope.game !== null){
					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.game.id,null);
					if($scope.profils[0]){
						$scope.profilSelected = $scope.profils[0];
					}
				}

			};

			var updateTime = function(){
				var rdvDate = new Date();
				var now = new Date();
				rdvDate.setHours($scope.startHours);
				rdvDate.setMinutes($scope.startMinutes);

				$scope.bDemain = false;
				if(now.getTime() > rdvDate.getTime()){
					rdvDate.setTime(rdvDate.getTime() + 1 * 24 * 3600 * 1000);
					$scope.bDemain = true;
				}

				$scope.day = rdvDate;
			} ;

			$scope.$watch('startMinutes',function(newValue,OldValue){
				updateTime();
			});

			$scope.$watch('startHours',function(newValue,OldValue){
				updateTime();
			});

            $scope.submit = function(){

	            if($scope.myForm.$valid === false){
		            return;
	            }
                var game = $scope.game.id;
                var day = $scope.myForm.inputDayStart.$modelValue.getTime()/1000;
                var dureeHours = $scope.dureeHours;
                var dureeMinutes = $scope.dureeMinutes;
                var plateform = $scope.plateform.id;
                var tags = $scope.tags;
                var description = $scope.description;
                var slotTotal = $scope.slotTotal;
				var profilId = $scope.profilSelected.id

                rdv.add(plateform,game,tags,description,day,dureeHours+':'+dureeMinutes,slotTotal,profilId).success(function(data){
					redirection.goToRdvId(data.id);
                });
            };

			$scope.updatePlateform = function(plateform){
				$scope.plateform = plateform;
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

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};

		}
	]
);
