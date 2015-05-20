angular.module('myApp.directives')
	.directive('lfgMasonry', [
		function() {
			'use strict';
			return {
				scope:{
					lfgMasonry : '='
				},
				link: function($scope, element, attrs) {
					$scope.lfgMasonry.appended( element );

					$scope.lfgMasonry.bindResize();
				},
				restrict: 'A',
				priority: 99
			};
		}
	]
);
