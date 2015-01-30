angular.module('myApp.controllers').controller('PartyWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location','$filter','redirection','$interval','activity','lang',
        function ($scope,rdv,$routeParams,user,$location,$filter,redirection,$interval,activity,lang) {
            'use strict';

	        $scope.lang = lang.getCurrent();

	        $scope.partyCreateUrl = redirection.getCreatePartyPageUrl();
	        $scope.registerUrl = redirection.getRegisterPageUrl();

			$scope.currentUser = user.get();

	        $scope.profilSelected = null;

			var manageAutorisation = function(){
				$scope.isLeader = false;
				$scope.canJoin = true;
				$scope.imOnGroup = false;

				if ($scope.currentUser !== null) {

					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame, $scope.rdv.game.id, $scope.rdv.plateform.id);

					if ($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username) {
						$scope.isLeader = true;
					}

					for (var key in $scope.rdv.users) {
						if ($scope.rdv.users[key].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}

					for (var key2 in $scope.rdv.usersInQueue) {
						if ($scope.rdv.usersInQueue[key2].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}
				} else {
					$scope.canJoin = false;
					$scope.imOnGroup = false;
					$scope.isLeader = false;
				}
			};

	        var getRdvDetails = function(){
		        rdv.get($routeParams.partyId).success(function (data) {
			        $scope.rdv = data;

			        $scope.isFull = (data.users.length === data.nbParticipant);

			        $scope.isEnded = rdv.isEnded($scope.rdv);
			        $scope.isLive = rdv.isLive($scope.rdv);

			        updateProfilsAvailable();

			        manageAutorisation();

		        });
	        };

	        var refreshData = function() {
		        if($scope.currentUser !== null){
			        user.updateOnline($scope.currentUser).success(function(data){
				        getRdvDetails();
			        });
		        } else {
			        getRdvDetails();
		        }
	        };

			$scope.join = function(){
				if($scope.currentUser === null){
//@todo rediriger vers la page connexion / register
					return;
				}
				stopAutoRefreshData();

				rdv.join($scope.rdv.id,$scope.profilSelected.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.acceptUser = function(userId){
				stopAutoRefreshData();
				rdv.acceptUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.kickUser = function(userId){
				stopAutoRefreshData();
				rdv.kickUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};


	        $scope.leave = function(userId){
				stopAutoRefreshData();
		        rdv.leave($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
		        });
	        };

			$scope.promote = function(userId){
				stopAutoRefreshData();
				rdv.promote($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};

			$scope.currentUrl = $location.absUrl();


			var refreshTime = 12000;
			var autoRefreshData = function(){
				stopAutoRefreshData();
				$scope.intervalId = $interval(function(){
					refreshData();
				}, refreshTime);
			};

			var stopAutoRefreshData = function(){
				$interval.cancel($scope.intervalId);
			};

	        var updateProfilsAvailable = function(){
		        if($scope.currentUser !== null && $scope.rdv !== null && $scope.rdv.game !== null && $scope.rdv.plateform !== null){
			        $scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.rdv.game.id,$scope.rdv.plateform.id);
					if($scope.profils[0] && $scope.profilSelected === null){
				        $scope.profilSelected = $scope.profils[0];
			        }
		        }
	        };

			refreshData();
			autoRefreshData();

        }
    ]
);
