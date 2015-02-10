angular.module('myApp.filters').filter('filterSince', ['tools',
	function (tools) {
		'use strict';
		return function (time_s) {
			return tools.getSinceTimeMessage(time_s);
		};
	}
]);