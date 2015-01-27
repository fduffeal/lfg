angular.module('myApp.filters').filter('filterHtml', ['$sce',
	function ($sce) {
	'use strict';
	return function (input) {

		if (input) {
			input = $sce.trustAsHtml(input);
		}
		return input;
	};
}]);