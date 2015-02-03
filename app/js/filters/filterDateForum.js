angular.module('myApp.filters').filter('filterDateForum', [
	'$filter',
	function ($filter) {
		'use strict';
		return function (date2_s) {
			var date2_ms = date2_s*1000;

			var now = new Date();
			var date1_ms = now.getTime();

			var dayDisplay = $filter('date')(date2_ms, 'd/MM/yy');
			if(dayDisplay !== $filter('date')(date1_ms, 'd/MM/yy')){
				return dayDisplay;
			}
			return $filter('date')(date2_ms, 'H:mm');
		};
	}
]);