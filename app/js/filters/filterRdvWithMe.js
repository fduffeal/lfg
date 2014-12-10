angular.module('myApp.filters').filter('filterRdvWithMe', [
	'filter',
	function (filter) {
	'use strict';
	return function (items,currentUserId,plateformId,tags,onlyOnePlace,nbPlaceAvailable) {

		return filter.byPlateformsAndTagsWithMe(items,currentUserId,plateformId,tags,onlyOnePlace,nbPlaceAvailable);

	};
}]);