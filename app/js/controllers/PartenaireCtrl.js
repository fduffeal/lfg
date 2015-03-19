angular.module('myApp.controllers').controller('PartenaireCtrl',
	['$scope','$routeParams','forum','redirection','$anchorScroll','$location','$timeout','user','partenaire',
	function ($scope,$routeParams,forum,redirection,$anchorScroll,$location,$timeout,user,partenaire) {
		'use strict';
		/*$scope.msg = $routeParams.msg;
		console.log($scope.msg);*/
		$scope.currentUser = user.get();
		$scope.texte = "";


		partenaire.getById($routeParams.id).success(function (data) {
			$scope.partenaire = data;
		});

	}
]);
