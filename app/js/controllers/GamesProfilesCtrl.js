angular.module('myApp.controllers').controller('GamesProfilesCtrl',
    ['$scope','user','rdv','$routeParams','redirection','lang',
        function ($scope,user,rdv,$routeParams,redirection,lang) {
            'use strict';
	        $scope.lang = lang.getCurrent();

	        $scope.currentUser = user.get();
			$scope.aProfils = [];
			if($scope.currentUser !== null){
				$scope.aProfils = $scope.currentUser.userGame;
			}


	        rdv.getFormInfo().then(function(data){
		        $scope.plateforms = data.plateforms;
		        $scope.games = data.games;

		        //$scope.plateform = data.plateforms[0];
		        /*if($routeParams.plateformId){
			        for(var key in data.plateforms){
				        if(data.plateforms[key].id == $routeParams.plateformId){
					        $scope.plateform = data.plateforms[key];
				        }
			        }
		        }*/

		        //$scope.game = data.games[0];
		        /*if($routeParams.gameId){
			        for(var key in data.games){
				        if(data.games[key].id == $routeParams.gameId){
					        $scope.game = data.games[key];
				        }
			        }
		        }*/

		        //$scope.updateFormData();

	        });


	        $scope.submitFormGameInfo = function(){
		        if($scope.formGameProfil.$valid === false){
			        return;
		        }
		        $scope.formGameInfoUpdate = false;

				if(typeof $scope.profilId  === "undefined" || $scope.profilId  === ""){
					user.createUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data1,$scope.data2,$scope.data3,$scope.data4).success(function(data){
						$scope.formGameInfoUpdate = true;
					});
				}else {
					user.updateUserGame($scope.plateform.id,$scope.game.id,$scope.profilId,$scope.profilName,$scope.gameUsername,$scope.data1,$scope.data2,$scope.data3,$scope.data4).success(function(data){
						$scope.formGameInfoUpdate = true;
					});
				}

	        };

			$scope.$watch('plateform',function(old,nexV){
				console.log('plateform',old,nexV);
			});

			$scope.selectProfil = function(profil){

				$scope.profilId = (profil!==null) ? profil.id : '';
				$scope.profilName = (profil!==null) ? profil.gameProfilName : '';
				$scope.gameUsername = (profil!==null) ? profil.gameUsername : '';
				$scope.data1 = (profil!==null) ? profil.data1 : '';
				$scope.data2 = (profil!==null) ? profil.data2 : '';
				$scope.data3 = (profil!==null) ? profil.data3 : '';
				$scope.data4 = (profil!==null) ? profil.data4 : '';

				$scope.plateform = (profil!==null) ? profil.plateform : '';
				$scope.game = (profil!==null) ? profil.game : '';

			};

	        $scope.updateFormData = function(){

				if($scope.formGameProfil.$valid === false){
					return;
				}

		        /*$scope.formGameInfoUpdate = false;
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
		        }*/
	        };
        }
    ]
);
