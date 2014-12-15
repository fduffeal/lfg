angular.module('myApp.filters').filter('filterGameProfil', [function () {
	'use strict';
	return function (userGameProfil,gameId,plateformId) {
		var aFilterdItems = [];

		for(var key in userGameProfil){
			if(userGameProfil[key].game.id !== gameId && gameId !== null){
				continue;
			}
			if(userGameProfil[key].plateform.id !== plateformId && plateformId !== null){
				continue;
			}
			aFilterdItems.push(userGameProfil[key]);
		}

		return aFilterdItems;
	};
}]);