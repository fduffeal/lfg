angular.module('myApp.filters').filter('filterSince', function () {
	'use strict';
	return function (date2_ms) {
		var now = new Date();
		var date1_ms = now.getTime();
		// Calculate the difference in milliseconds
		var difference_ms = date1_ms - (date2_ms*1000);

		if(difference_ms < 0){
			now.setTime(date2_ms*1000);
			var month = now.getMonth()+1;
			if(month < 10){
				month = "0"+month;
			}
			var minutes = now.getMinutes();
			if(minutes < 10){
				minutes = "0"+minutes;
			}
			return now.getFullYear()+"-"+month+"-"+now.getDate()+" "+now.getHours()+":"+minutes;
		}

		var one_minute=1000*60*1;

		var diffMinutes = Math.round(difference_ms/one_minute);
		if(diffMinutes < 60){
			return diffMinutes+' minutes ago';
		}

		var one_hour=1000*60*60*1;
		var diffHours = Math.round(difference_ms/one_hour);
		if(diffHours < 24){
			return diffHours+' hours ago';
		}

		//Get 1 day in milliseconds
		var one_day=1000*60*60*24;
		var diffDays = Math.round(difference_ms/one_day);
		return diffDays+' days ago';

	};
});