angular.module('myApp.directives')
	.directive('lfgInit', ['user',
		function(user) {
			'use strict';
			return {
				scope:{
					'init':'='
				},
				link: function($scope, element, attrs) {
					user.get();
				},
				restrict: 'E'
			};
		}
	]
);
