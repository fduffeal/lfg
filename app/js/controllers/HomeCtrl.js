angular.module('myApp.controllers').controller('HomeCtrl',
	['$scope','$routeParams','forum','redirection','$anchorScroll','$location','$timeout','user','$window',
	function ($scope,$routeParams,forum,redirection,$anchorScroll,$location,$timeout,user,$window) {
		'use strict';
			/*$scope.msg = $routeParams.msg;
			console.log($scope.msg);*/
			$scope.currentUser = user.get();
			$scope.texte = "";


			forum.getAllTopic().success(function(data) {
				$scope.aTopic = data;
			});


		}
		]
		);
