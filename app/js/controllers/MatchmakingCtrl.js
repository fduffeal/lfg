angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking','user','redirection','$filter',
		function ($scope,matchmaking,user,redirection,$filter) {
			'use strict';

			$scope.currentUser = user.get();
			$scope.matchmakingTemplate = null;
			$scope.profilSelected = null;

			var updateProfilsAvailable = function(){
				if($scope.currentUser !== null && $scope.game !== null){
					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,null,null);
					if($scope.profils[0] && $scope.profilSelected === null){
						$scope.profilSelected = $scope.profils[0];
					}
				}
			};

			updateProfilsAvailable();

			/**
			 * récupère les configs pour la selection du type de matchmaking
			 */
			matchmaking.getConf().success(function(data){

				var groupOfTemplate = {};
				for(var key in data){
					if(!groupOfTemplate[data[key].description]) {
						groupOfTemplate[data[key].description] = [];
					}
					data[key].concatTags = "";
					for(var keyTag in data[key].tags){
						data[key].concatTags += "#"+data[key].tags[keyTag].nom+" ";
					}
					groupOfTemplate[data[key].description].push(data[key]);
				}
				$scope.groupOfTemplate = groupOfTemplate;
			});

			/**
			 * lance le matchmaking
			 */
			$scope.join = function(){
				if($scope.joinMatchmakingForm.$valid === false){
					return;
				}
				matchmaking.join($scope.templateSelectedModel.id,$scope.profilSelected.id).success(function(data){
					redirection.goToMatchmakingId(data.id);
				});
			};

			/**
			 * selectionne un type de matchmaking
			 * @param template
			 */
			$scope.selectGroupOfTemplate = function(template){
				$scope.matchmakingTemplate = template;
				$scope.templateSelectedModel = template[0];
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};
		}
	]
);
