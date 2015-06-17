angular.module('myApp.filters').filter('filterDateNews', ['gettextCatalog','$filter',
	function (gettextCatalog,$filter) {
		'use strict';
		return function (date2_s) {

			var date2_ms = date2_s * 1000;
			var currentDate = new Date(date2_ms);

			var now = new Date();
			var date1_ms = now.getTime();

			var yesterday = new Date(date1_ms - 24 * 60 * 60 * 1000);

			if (currentDate.toLocaleDateString() === now.toLocaleDateString()) {
				return $filter('date')(date2_ms, 'HH:mm');
			}

			if (currentDate.toLocaleDateString() === yesterday.toLocaleDateString()) {
				return gettextCatalog.getString("yesterday at {{time}}", {time: $filter('date')(date2_ms, 'HH:mm')});
			}

			return currentDate.toLocaleDateString();
		};
	}
]);