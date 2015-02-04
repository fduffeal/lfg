angular.module('myApp.directives')
	.directive('lfgFriendlist', ['$window','$document',
		function($window,$document) {
			'use strict';
			return {
				link : function(){



				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-friendlist.html'
			};
		}
	]
);
