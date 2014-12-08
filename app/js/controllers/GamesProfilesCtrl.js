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
	        });


	        $scope.submitFormGameInfo = function(){
		        if($scope.formGameProfil.$valid === false){
			        return;
		        }
		        $scope.formGameInfoUpdate = false;

				if(typeof $scope.profilId  === "undefined" || $scope.profilId  === ""){
					user.createUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data_1,$scope.data_2,$scope.data_3,$scope.data_4).success(function(data){
						$scope.aProfils = data.userGame;
						$scope.formGameInfoUpdate = true;
					});
				}else {
					user.updateUserGame($scope.plateform.id,$scope.game.id,$scope.profilId,$scope.profilName,$scope.gameUsername,$scope.data_1,$scope.data_2,$scope.data_3,$scope.data_4).success(function(data){
						$scope.aProfils = data.userGame;
						$scope.formGameInfoUpdate = true;
					});
				}
	        };

			$scope.selectProfil = function(profil){

				$scope.profilId = (profil!==null) ? profil.id : '';
				$scope.profilName = (profil!==null) ? profil.gameProfilName : '';
				$scope.gameUsername = (profil!==null) ? profil.gameUsername : '';
				$scope.data_1 = (profil!==null) ? profil.data1 : '';
				$scope.data_2 = (profil!==null) ? parseInt(profil.data2) : '';
				$scope.data_3 = (profil!==null) ? profil.data3 : '';
				$scope.data_4 = (profil!==null) ? profil.data4 : '';

				for(var keyP in $scope.plateforms){
					if($scope.plateforms[keyP].id == profil.plateform.id){
						$scope.plateform = $scope.plateforms[keyP];
					}
				}

				for(var keyG in $scope.games){
					if($scope.games[keyG].id == profil.game.id){
						$scope.game = $scope.games[keyG];
					}
				}
			};
        }
    ]
);
