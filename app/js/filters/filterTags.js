angular.module('myApp.filters').filter('filterTags', [
	function () {
		'use strict';
		return function (tag,withDiese) {
			var hasDiese = tag.match(/#/);
			if(!hasDiese && withDiese){
				tag = "#"+tag;
			} else if(hasDiese && !withDiese){
				tag = tag.replace('#','');
			}
			return tag;
		};
	}
]);