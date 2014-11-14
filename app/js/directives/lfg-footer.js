angular.module('myApp.directives')
	.directive('lfgFooter', ['lang','activity',
		function(lang,activity) {
			return {
				link: function($scope, element, attrs) {
					lang.setLang();

					$scope.updateLang = function(langSelected){
						lang.change(langSelected);
					};

					activity.setEvent();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-footer.html'
			};
		}
	]
);
