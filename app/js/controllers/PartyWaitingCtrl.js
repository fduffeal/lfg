angular.module('myApp.controllers').controller('PartyWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location','$filter','$rootScope',
        function ($scope,rdv,$routeParams,user,$location,$filter,$rootScope) {
            'use strict';

			$scope.currentUser = user.get();



	        rdv.get($routeParams.partyId).success(function(data){
		        $scope.rdv = data;

				$scope.isLeader = false;
				$scope.canJoin = true;
				$scope.imOnGroup = false;

				$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.rdv.game.id,$scope.rdv.plateform.id);

				if($scope.profils[0]){
					$scope.profilSelected = $scope.profils[0];
				}

				if($scope.currentUser !== null){
					if($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username){
						$scope.isLeader = true;
					}

					for(var key in $scope.rdv.users){
						if($scope.rdv.users[key].user.username === $scope.currentUser.username){
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}

					for(var key2 in $scope.rdv.usersInQueue){
						if($scope.rdv.usersInQueue[key2].user.username === $scope.currentUser.username){
							$scope.canJoin = false;
						}
					}
				} else {
					$scope.canJoin = false;
				}


	        });

			$scope.join = function(){
				if($scope.currentUser === null){
//@todo rediriger vers la page connexion / register
					return;
				}

				rdv.join($scope.rdv.id,$scope.profilSelected.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					$scope.canJoin = false;
				});
			};

			$scope.acceptUser = function(userId){
				rdv.acceptUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
				});
			};

			$scope.kickUser = function(userId){
				rdv.kickUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
				});
			};


	        $scope.leave = function(userId){
		        rdv.leave($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
			        $scope.canJoin = false;
		        });
	        };

			$scope.createProfil = function(){
				$location.path($rootScope.lang+'/profile/'+$scope.rdv.game.id+'/'+$scope.rdv.plateform.id);
			};

			$scope.currentUrl = $location.absUrl();

        }
    ]
);
