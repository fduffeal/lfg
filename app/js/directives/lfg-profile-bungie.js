angular.module('myApp.directives')
    .directive('lfgProfileBungie', [
        function(user) {
            'use strict';
            return {
                scope:{
                    'lfgProfileBungie':'=',
                    'userGame':'=',
                    'withPlateform':'@',
                    'user':'=',
                    'listUser':'='
                },
                link: function($scope, element, attrs) {
                    $scope.isConnected = false;
                    if(typeof $scope.user !== "undefined" && $scope.user !== null && $scope.listUser !== null){
                        if(typeof $scope.listUser !== "undefined" && $scope.listUser[$scope.user.username]){
                            $scope.isConnected = true;
                        }
                    }
                },
                restrict: 'E',
                templateUrl: '/html/directives/lfg-profile-bungie.html'
            };
        }
    ]
);
