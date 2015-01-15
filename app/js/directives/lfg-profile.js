angular.module('myApp.directives')
    .directive('lfgProfile', ['user','storage',
        function(user,storage) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'=',
	                'selectedPerso':'=',
	                'aUserGame':'=',
                    'withPlateform':'@'
                },
                link: function($scope, element, attrs) {

	                $scope.currentUser = user.get();

	                $scope.selectPerso = function(persoSelected){
		                $scope.selectedPerso = persoSelected;
                        storage.setPersistant('cookie_selected_profil_id',persoSelected.id);
	                };

                    var setSelectedPerso = function(){
                        if($scope.currentUser !== null){
                            $scope.aUserGame = $scope.currentUser.userGame;
                        }

                        var selectedProfilCookieId = storage.getPersistant('cookie_selected_profil_id');
                        if(typeof selectedProfilCookieId !== "undefined"){
                            for(var key in $scope.aUserGame){
                                if($scope.aUserGame[key].id == selectedProfilCookieId){
                                    $scope.selectedPerso = $scope.aUserGame[key];
                                }
                            }
                        }

                        if($scope.selectedPerso === null && $scope.currentUser !== null && $scope.aUserGame.length > 0){
                            $scope.selectedPerso = $scope.aUserGame[0];
                        }
                    };

                    setSelectedPerso();
                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);
