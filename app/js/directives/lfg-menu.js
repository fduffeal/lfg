angular.module('myApp.directives')
	.directive('lfgMenu', [
		function() {
			return {
				link: function($scope, element, attrs) {

				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-menu.html'
			};
		}
	]
);
