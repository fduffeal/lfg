angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','$location',
		function ($scope,rdv,$location) {
			'use strict';

			$scope.test='1';

			$scope.today = new Date();

			$scope.demain = new Date();
			$scope.demain.setTime($scope.demain.getTime() + 24 * 3600 * 1000);

			$scope.goToParty = function(id){
				$location.path('/party/waiting/'+id);
			};


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
