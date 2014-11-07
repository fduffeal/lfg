angular.module('myApp.filters').filter('filterRdv', [function () {
	return function (items,plateformId,tags) {
		'use strict';
		plateformId = 1;
		tags = 'VoG';
		var aFilterdItems = [];

		var aTags = tags.split(' ');

		for(var key in items){
			if(items[key].plateform === null || items[key].plateform.id !== plateformId){
				continue;
			}

			for(var keyTag in items[key].tags){
				var asTag = true;
				if(aTags.indexOf(items[key].tags[keyTag].nom) < 0){
					asTag = false;
				}
			}

			if(asTag === false){
				continue;
			}
			aFilterdItems.push(items[key]);
		}

		return aFilterdItems;
	};
}]);