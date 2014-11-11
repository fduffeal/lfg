angular.module('myApp.filters').filter('filterRdvLastPlace', [function () {
	'use strict';
	return function (items,plateformId,tags) {

		var aFilterdItems = [];

		var aTags = [];
		if(typeof tags === "string" && tags !== ""){
			aTags = tags.split(' ');
		}

		var d = new Date();
		var now = d.getTime()/1000;

		for(var key in items){
			if(plateformId !== ""){
				if(items[key].plateform === null || items[key].plateform.id !== plateformId){
					continue;
				}
			}

			if(items[key].end < now){
				continue;
			}

			if(aTags.length === 0){
				aFilterdItems.push(items[key]);
				continue;
			}

			var aTagItem = [];
			for(var keyTagItem in items[key].tags){
				aTagItem.push(items[key].tags[keyTagItem].nom.toLowerCase());
			}

			var asTag = true;
			for(var keyTag in aTags){
				if(aTagItem.indexOf(aTags[keyTag].toLowerCase()) < 0){
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