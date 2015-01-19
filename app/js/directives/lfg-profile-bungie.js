angular.module('myApp.directives')
    .directive('lfgProfileBungie', [
        function(user) {
            'use strict';
            return {
                scope:{
                    'lfgProfileBungie':'=',
                    'userGame':'=',
                    'withPlateform':'@'
                },
                link: function($scope, element, attrs) {

                },
                restrict: 'E',
                templateUrl: '/html/directives/lfg-profile-bungie.html'
            };
        }
    ]
);
