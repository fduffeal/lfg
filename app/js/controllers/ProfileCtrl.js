angular.module('myApp.controllers').controller('ProfileCtrl',
    ['$scope','user','rdv','$routeParams','redirection',
        function ($scope,user,rdv,$routeParams,redirection) {
			'use strict';
			$scope.currentUser = user.get();

			rdv.getFormInfo().then(function(data){
				$scope.plateforms = data.plateforms;
				$scope.games = data.games;

				$scope.plateform = data.plateforms[0];
				if($routeParams.plateformId){
					for(var key in data.plateforms){
						if(data.plateforms[key].id == $routeParams.plateformId){
							$scope.plateform = data.plateforms[key];
						}
					}
				}

				$scope.game = data.games[0];
				if($routeParams.gameId){
					for(var key in data.games){
						if(data.games[key].id == $routeParams.gameId){
							$scope.game = data.games[key];
						}
					}
				}

				$scope.updateFormData();

			});


			$scope.submitFormGameInfo = function(){
				$scope.formGameInfoUpdate = false;
				user.setUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data1,$scope.data2,$scope.data3,$scope.data4).success(function(data){
					$scope.formGameInfoUpdate = true;
				});
			};

			$scope.updateFormData = function(){
				$scope.formGameInfoUpdate = false;
				$scope.profilName = '';
				$scope.gameUsername = '';
				$scope.data1 = '';
				$scope.data2 = '';
				$scope.data3 = '';
				$scope.data4 = '';
				for(var key in $scope.currentUser.userGame){
					if($scope.currentUser.userGame[key].plateform.id === $scope.plateform.id){
						$scope.profilName = $scope.currentUser.userGame[key].gameProfilName;
						$scope.gameUsername = $scope.currentUser.userGame[key].gameUsername;
						$scope.data2 = $scope.currentUser.userGame[key].data2;
						$scope.data3 = $scope.currentUser.userGame[key].data3;
						$scope.data4 = $scope.currentUser.userGame[key].data4;
						$scope.data1 = $scope.currentUser.userGame[key].data1;
					}
				}
			};

			$scope.goBack = function(){
				redirection.goBack();
			};

        }
    ]
);
