angular.module('myApp.controllers').controller('PartyWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location',
        function ($scope,rdv,$routeParams,user,$location) {
            'use strict';

			$scope.currentUser = user.get();

	        rdv.get($routeParams.partyId).success(function(data){
		        $scope.rdv = data;

				$scope.isLeader = false;
				$scope.canJoin = true;

				if($scope.currentUser !== null){
					if($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username){
						$scope.isLeader = true;
					}

					for(var key in $scope.rdv.users){
						if($scope.rdv.users[key].username === $scope.currentUser.username){
							$scope.canJoin = false;
						}
					}

					for(var key2 in $scope.rdv.usersInQueue){
						if($scope.rdv.usersInQueue[key2].username === $scope.currentUser.username){
							$scope.canJoin = false;
						}
					}
				}


	        });

			$scope.join = function(){
				if($scope.currentUser === null){
//@todo rediriger vers la page connexion / register
					return;
				}

				rdv.join($scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
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


	        $scope.leave = function(){
		        rdv.leave($scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
			        $scope.canJoin = false;
		        });
	        };

			$scope.currentUrl = $location.absUrl();

        }
    ]
);
