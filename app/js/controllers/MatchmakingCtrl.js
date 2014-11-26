angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking',
		function ($scope,matchmaking) {
			'use strict';

			$scope.currentUser = user.get();

			$scope.$on('setUserGame',function(event,data){
				$scope.profilSelected = userSelected;
			});

			$scope.join = function(){
				var matchmakingId = 1;
				matchmaking.join(matchmakingId,$scope.profilSelected.id);
			}


		}
	]
);
