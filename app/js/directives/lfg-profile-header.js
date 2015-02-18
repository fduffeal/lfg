angular.module('myApp.directives')
    .directive('lfgProfileHeader', ['user',
        function(user) {
            'use strict';
            return {
                scope:{

                },
                link: function($scope, element, attrs) {
                    $scope.currentUser = user.get();

                    $scope.selectProfil = function(profil){
                        $scope.profilNotSelected = [];
                        $scope.profilSelected = profil;

                        for(var key in $scope.currentUser.userGame){
                            if($scope.currentUser.userGame[key] != profil){
                                $scope.profilNotSelected.push($scope.currentUser.userGame[key]);
                            }
                        }
                    };

                    if($scope.currentUser != null){
                        $scope.selectProfil($scope.currentUser.userGame[0]);
                    }

                },
                restrict: 'E',
                templateUrl: '/html/directives/lfg-profile-header.html'
            };
        }
    ]
);
