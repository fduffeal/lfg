angular.module('myApp.controllers').controller('ForumCtrl',
	['$scope','$routeParams','forum','redirection',
		function ($scope,$routeParams,forum,redirection) {
			'use strict';

			$scope.displayForm = false;
			forum.getAllTopic().success(function(data) {
				for(var key in data){
					data[key].url = redirection.getTopicUrl(data[key]);
				}
				$scope.aTopic = data;
			});
		}
	]
);
