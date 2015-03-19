angular.module('myApp.controllers').controller('VideothequeCtrl',
	['$scope','$routeParams','forum','redirection','$anchorScroll','$location','$timeout','user','partenaire',
	function ($scope,$routeParams,forum,redirection,$anchorScroll,$location,$timeout,user,partenaire) {
		'use strict';
		/*$scope.msg = $routeParams.msg;
		console.log($scope.msg);*/
		$scope.currentUser = user.get();
		$scope.texte = "";


		partenaire.getAll().success(function (data) {
			for(var key in data){
				data[key].href = redirection.getPartenaireByIdUrl(data[key]);
			}
			$scope.partenaires = data;
		});

	}
]);
