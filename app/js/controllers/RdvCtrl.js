angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','$location','$route','tag',
		function ($scope,rdv,$location,$route,tag) {
			'use strict';

			$scope.today = new Date();

			$scope.demain = new Date();
			$scope.demain.setTime($scope.demain.getTime() + 24 * 3600 * 1000);

			$scope.goToParty = function(id){
				$location.path('/party/waiting/'+id);
			};


			$scope.updateTags = function(){
				var aTags = $scope.tags.split(' ');
				$scope.autoCompleteTags = tag.autoCompleteUserTags(aTags,$scope.allTags);

			};

			$scope.autoCompleteTags = [];

			$scope.allTags = [];

			rdv.getFormInfo().success(function(data){
				$scope.allTags = data.tags;
				$scope.autoCompleteTags = tag.autoCompleteUserTags([],$scope.allTags);
				$scope.aPlateforms = data.plateforms;
			});


			rdv.getAll().success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				$scope.aRdv = data;
			}).error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});

			$scope.plateformSelected = '';
			$scope.plateformNameSelected = 'ALL';
			$scope.updatePlateform = function(id,nom){
				$scope.plateformSelected = id;
				$scope.plateformNameSelected = nom;
			};

			$scope.displayWelcome = ($route.current.action === 'welcome');
		}
	]
);
