angular.module('myApp.controllers').controller('HomeCtrl',
	['$scope','$routeParams',
		function ($scope,$routeParams) {
			'use strict';
			$scope.msg = $routeParams.msg;
			console.log($scope.msg);
		}
	]
);
