angular.module('myApp.directives')
	.directive('lfgInterval', ["$interval",
		function($interval) {
			'use strict';
			return {
				replace :true,
				scope:{
					'lfgInterval':'='
				},
				link: function($scope, element, attrs) {

					element.on('$destroy', function() {
						$interval.cancel($scope.lfgInterval);
						$scope.lfgInterval = undefined;
					});
				},
				restrict: 'A'
			};
		}
	]
);
