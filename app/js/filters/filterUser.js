angular.module('myApp.filters').filter('filterUser', [
	function () {
		'use strict';
		return function (userList,usernameSearch,onlyFriends,plateformId) {

			if(usernameSearch == '' && plateformId === null){
				return userList;
			}

			usernameSearch = usernameSearch.toLowerCase();

			var userFiltered = [];
			for(var key in userList){

				var isGoodPlateform = true;

				if(plateformId !== null && typeof plateformId !== "undefined"){
					isGoodPlateform = false;
					for(var i in userList[key].userGame){
						if(userList[key].userGame[i].plateform.id === plateformId){
							isGoodPlateform = true;
							break;
						}
					}
				}

				if(isGoodPlateform === false){
					continue;
				}


				var findUser = false;
				for(var i in userList[key].userGame){
					if(userList[key].userGame[i].gameUsername.toLowerCase().indexOf(usernameSearch) != -1){
						findUser = true;
						break;
					}
				}

				if(findUser === false){
					continue;
				}

				userFiltered.push(userList[key]);

			}
			return userFiltered;
		};
	}
]);