angular.module('myApp.filters').filter('filterNotification', [
	'filter','user',
	function (filter,user) {
		'use strict';
		return function (items,userId) {
			var aFilteredItems = [];
			if(userId !== null) {
				for (var key in items) {
					if (items[key].destinataire.id === userId) {
						aFilteredItems.push(items[key]);
					}
				}
			}

			return aFilteredItems;
		};
	}
]);