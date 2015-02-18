angular.module('myApp.filters').filter('filterOnlineTime', [
	'$filter','gettextCatalog',
	function ($filter,gettextCatalog) {
		'use strict';
		return function (date2_s) {
			var date2_ms = date2_s*1000;
			var currentDate = new Date(date2_ms);

			var now = new Date();
			var date1_ms = now.getTime();
			// Calculate the difference in milliseconds
			var difference_ms = date1_ms - date2_ms;

			var tomorrow = new Date(date1_ms + 24 * 60 * 60 * 1000);

			var one_minute=1000*60*1;

			var diffMinutes = Math.round(difference_ms/one_minute);
			if(diffMinutes < 60){
				return gettextCatalog.getString("{{minutes}} minutes", { minutes: diffMinutes });
			}

			var one_hour=1000*60*60*1;
			var diffHours = Math.round(difference_ms/one_hour);
			if(diffHours < 24){
				return gettextCatalog.getString("{{hours}} hours", { hours: diffHours });

			}

			//Get 1 day in milliseconds
			var one_day=1000*60*60*24;
			var diffDays = Math.round(difference_ms/one_day);
			return gettextCatalog.getString("{{days}} days", { days: diffDays });
		};
	}
]);