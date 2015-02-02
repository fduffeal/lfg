angular.module('myApp.filters').filter('filterDateForum', [
	'$filter',
	function ($filter) {
		'use strict';
		return function (date2_s) {
			var date2_ms = date2_s*1000;

			var now = new Date();
			var date1_ms = now.getTime();
			// Calculate the difference in milliseconds
			var difference_ms = date1_ms - (date2_ms);

			var one_day=1000*60*60*24;
			if(difference_ms > one_day){
				return $filter('date')(date2_ms, 'd/MM/yy');
			}

			return $filter('date')(date2_ms, 'H:mm');


		};
	}
]);