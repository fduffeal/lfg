angular.module('myApp.directives')
	.directive('lfgFooter', ['lang','activity','$location',
		function(lang,activity,$location) {
			return {
				link: function($scope, element, attrs) {
					lang.initLang();
					$scope.lang = lang.getCurrent();

					$scope.updateLang = function(langSelected){
						lang.change(langSelected);
						$scope.lang = langSelected;
					};

					var switchLangUrl = function(newLang){
						return $location.absUrl().replace($scope.lang,newLang);
					};

					$scope.switchLangUrlFr = switchLangUrl('fr');
					$scope.switchLangUrlEn = switchLangUrl('en');

					activity.setEvent();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-footer.html'
			};
		}
	]
);
