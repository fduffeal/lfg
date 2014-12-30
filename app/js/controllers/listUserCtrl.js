angular.module('myApp.controllers').controller('404Ctrl',
	['$scope','$routeParams',
		function ($scope,$routeParams) {
			'use strict';
			$scope.msg = $routeParams.msg;
			console.log($scope.msg);
		}
	]
);
