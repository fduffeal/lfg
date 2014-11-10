angular.module('myApp.controllers').controller('ProfileCtrl',
    ['$scope','user','rdv',
        function ($scope,user,rdv) {
			'use strict';
			$scope.currentUser = user.get();

			rdv.getFormInfo().success(function(data){
				$scope.plateforms = data.plateforms;
				$scope.games = data.games;

				$scope.plateform = data.plateforms[0];
				$scope.game = data.games[0];

				$scope.updateFormData();

			});


			$scope.submitFormGameInfo = function(){
				$scope.formGameInfoUpdate = false;
				user.setUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.data1,$scope.data2,$scope.data3,$scope.data4).success(function(data){
					$scope.formGameInfoUpdate = true;
				});
			};

			$scope.updateFormData = function(){
				$scope.formGameInfoUpdate = false;
				$scope.profilName = '';
				$scope.data1 = '';
				$scope.data2 = '';
				$scope.data3 = '';
				$scope.data4 = '';
				for(var key in $scope.currentUser.userGame){
					if($scope.currentUser.userGame[key].plateform.id === $scope.plateform.id){
						$scope.profilName = $scope.currentUser.userGame[key].gameProfilName;
						$scope.data2 = $scope.currentUser.userGame[key].data2;
						$scope.data3 = $scope.currentUser.userGame[key].data3;
						$scope.data4 = $scope.currentUser.userGame[key].data4;
						$scope.data1 = $scope.currentUser.userGame[key].data1;
					}
				}
			};

        }
    ]
);
