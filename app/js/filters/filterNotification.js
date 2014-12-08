angular.module('myApp.filters').filter('filterNotification', [
	'filter','user','$rootScope',
	function (filter,user,$rootScope) {
		'use strict';
		return function (items,userId) {

			var aNotifRead = [];
			if($rootScope.notificationsAlreadyRead){
				for(var key in $rootScope.notificationsAlreadyRead){
					aNotifRead.push($rootScope.notificationsAlreadyRead[key].id);
				}
			}

			var aFilteredItems = [];
			if(userId !== null) {
				for (var key in items) {
					if (items[key].destinataire.id === userId) {

						if(aNotifRead.indexOf(items[key].id) === -1){
							items[key].unread = true;
						}
						aFilteredItems.push(items[key]);
					}
				}
			}

			return aFilteredItems;
		};
	}
]);