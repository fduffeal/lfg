angular.module('myApp.controllers').controller('ForumCtrl',
	['$scope','$routeParams','forum','redirection','$location',
		function ($scope,$routeParams,forum,redirection,$location) {
			'use strict';

			forum.getAllTopic().success(function(data) {
				for(var key in data){
					data[key].url = redirection.getTopicUrl(data[key]);
				}
				$scope.aTopic = data;
			});

			$scope.submit = function(){
				if($scope.myForm.$valid === false){
					return;
				}

				forum.createTopic($scope.title,$scope.texte).success(function(data){
					var url = redirection.getTopicUrl(data,1)
					$location.path(url);
				});
			}
		}
	]
);
