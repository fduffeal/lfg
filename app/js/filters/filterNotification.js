angular.module('myApp.filters').filter('filterNotification', [
	'filter','user',
	function (filter,user) {
		'use strict';
		return function (items) {
			var courantUser = user.get();

			var aFilteredItems = [];
			for(var key in items){
				if(items[key].destinataire.id === courantUser.id){
					aFilteredItems.push(items[key]);
				}
			}

			return aFilteredItems;
		};
	}
]);