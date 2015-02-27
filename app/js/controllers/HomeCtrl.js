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

				for(var i = 0;i< $scope.aTopic.length-1;i++){
					forum.getTopic($scope.aTopic[i].id, 1, 1).success(function(data) {
						$scope.aTopic[i].message = data.messages[0].texte;
					});
				}
			});


		}
		]
		);
