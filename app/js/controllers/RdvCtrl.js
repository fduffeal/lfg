angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv',
		function ($scope,rdv) {
			'use strict';

			$scope.test='1';


			rdv.getAll().success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					console.log(data);
					$scope.aRdv = data;
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		}
	]
);
