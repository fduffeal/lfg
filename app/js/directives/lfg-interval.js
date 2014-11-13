angular.module('myApp.directives')
	.directive('lfgInterval', ["$interval",
		function($interval) {
			'use strict';
			return {
				replace :true,
				scope:{
					'lfgInterval':'=',
					'id': '@'
				},
				link: function($scope, element, attrs) {

					$scope.intervalId = $scope.id;
					element.on('$destroy', function() {
						$interval.cancel($scope.lfgInterval);
					});
				},
				restrict: 'A'
			};
		}
	]
);
