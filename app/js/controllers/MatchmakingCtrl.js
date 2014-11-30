angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking','user',
		function ($scope,matchmaking,user) {
			'use strict';

			$scope.currentUser = user.get();

			matchmaking.getConf().success(function(data){

				var groupOfTemplate = {};
				for(var key in data){
					if(!groupOfTemplate[data[key].description]) {
						groupOfTemplate[data[key].description] = [];
					}
					data[key].concatTags = "";
					for(var keyTag in data[key].tags){
						console.log(data[key].tags[keyTag]);
						data[key].concatTags += "#"+data[key].tags[keyTag].nom+" ";
					}
					groupOfTemplate[data[key].description].push(data[key]);
				}
				$scope.groupOfTemplate = groupOfTemplate;
			});

			$scope.$on('setUserGame',function(event,data){
				var userSelected = data[0];
				$scope.profilSelected = userSelected;
			});

			$scope.join = function(){
				if($scope.joinMatchmakingForm.$valid === false){
					return;
				}
				matchmaking.join($scope.templateSelectedModel.id,$scope.profilSelected.id);
			};

			$scope.selectGroupOfTemplate = function(template){
				$scope.matchmakingTemplate = template;
				$scope.templateSelectedModel = template[0];
				$scope.joinMatchmakingForm.templateSelectedInput.value = template[0];
			};
		}
	]
);
