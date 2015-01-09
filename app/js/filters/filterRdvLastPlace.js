angular.module('myApp.filters').filter('filterRdvLastPlace', [
	'filter',
	function (filter) {
	'use strict';
	return function (items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,onlyOnePlace,nbPlaceAvailable,type) {

		return filter.byPlateformsAndTags(items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,onlyOnePlace,nbPlaceAvailable,type);

	};
}]);