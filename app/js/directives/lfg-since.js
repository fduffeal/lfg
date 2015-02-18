angular.module('myApp.directives')
    .directive('lfgSince', ['tools','$timeout',
        function(tools,$timeout) {
            'use strict';
            return {
                scope:{
                    time : '@'
                },
                link: function($scope, element, attrs) {

                    var update = function(){
                        $scope.message = tools.getSinceTimeMessage($scope.time);
                        $timeout(function() {
                            update();
                        }, 60000);
                    };

                    update();

                },
                restrict: 'E',
                templateUrl: '/html/directives/lfg-since.html'
            };
        }
    ]
);
