angular.module('myApp.directives')
	.directive('lfgFooter', ['user',
		function(user) {
			return {
				link: function($scope, element, attrs) {
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-footer.html'
			};
		}
	]
);
