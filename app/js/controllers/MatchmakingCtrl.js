angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking','user','redirection',
		function ($scope,matchmaking,user,redirection) {
			'use strict';

			$scope.currentUser = user.get();
			$scope.matchmakingTemplate = null;
			$scope.profilSelected = null;

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
			 * écoute le changement de profil
			 */
			$scope.$on('setUserGame',function(event,data){
				var userSelected = data[0];
				$scope.profilSelected = userSelected;
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
