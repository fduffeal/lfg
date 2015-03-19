angular.module('myApp.controllers').controller('PartenaireCtrl',
	['$scope','$routeParams','forum','redirection','$anchorScroll','$location','$timeout','user','partenaire',
	function ($scope,$routeParams,forum,redirection,$anchorScroll,$location,$timeout,user,partenaire) {
		'use strict';
		/*$scope.msg = $routeParams.msg;
		console.log($scope.msg);*/
		$scope.currentUser = user.get();
		$scope.texte = "";


		//partenaire.get($routeParams.id).success(function (data) {
		//	console.log(data);
		//});

	}
]);
