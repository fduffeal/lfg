angular.module('myApp.filters').filter('filterAvatar', [function () {
	'use strict';
	return function (userGameProfil) {


		var aFilteredItems = [];
		var maxLevel = 0;

		for(var key in userGameProfil){
			var currentLevel = parseInt(userGameProfil[key].data2);
			if(currentLevel < maxLevel){
				continue;
			}
			maxLevel = currentLevel;
			aFilteredItems = [];
			aFilteredItems.push(userGameProfil[key]);

		}
		return aFilteredItems;
	};
}]);