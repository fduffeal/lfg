angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking','user',
		function ($scope,matchmaking,user) {
			'use strict';

			$scope.currentUser = user.get();

			$scope.$on('setUserGame',function(event,data){
				var userSelected = data[0];
				$scope.profilSelected = userSelected;
			});

			$scope.join = function(){
				var matchmakingId = 1;
				matchmaking.join(matchmakingId,$scope.profilSelected.id);
			}
		}
	]
);
