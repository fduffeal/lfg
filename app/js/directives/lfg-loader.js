angular.module('myApp.directives')
	.directive('lfgLoader', [
		function() {
			return {
				link: function() {
				},
				restrict: 'E',
				replace:false,
				templateUrl: '/html/directives/lfg-loader.html'
			};
		}
	]
);
