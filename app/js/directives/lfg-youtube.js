angular.module('myApp.directives')
	.directive('lfgYoutube', [
		function() {
			'use strict';
			return {
				scope:{
					url : '='
				},
				link: function($scope, element, attrs) {

					console.log($scope.url);


				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-youtube.html'
			};
		}
	]
);
