angular.module('myApp.filters').filter('filterUser', [
	function () {
		'use strict';
		return function (userList,usernameSearch,onlyFriends) {



			if(usernameSearch == ''){
				return userList;
			}

			usernameSearch = usernameSearch.toLowerCase();

			var userFiltered = [];
			for(var key in userList){
				if(userList[key].username.toLowerCase().indexOf(usernameSearch) != -1){
					userFiltered.push(userList[key]);
				}
			}
			console.log(userList,usernameSearch,onlyFriends);
			return userFiltered;
		};
	}
]);