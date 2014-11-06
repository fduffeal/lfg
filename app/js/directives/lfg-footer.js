angular.module('myApp.directives')
	.directive('lfgFooter', ['lang',
		function(lang) {
			return {
				link: function($scope, element, attrs) {
					lang.setLang();

					$scope.updateLang = function(langSelected){
						lang.change(langSelected);
					};
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-footer.html'
			};
		}
	]
);
