angular.module('myApp.filters').filter('filterGameProfil', [function () {
	'use strict';
	return function (userGameProfil,gameId,plateformId) {
		var aFilterdItems = [];

		for(var key in userGameProfil){
			if(userGameProfil[key].game.id === gameId && userGameProfil[key].plateform.id === plateformId){
				aFilterdItems.push(userGameProfil[key]);
			}
		}

		return aFilterdItems;
	};
}]);