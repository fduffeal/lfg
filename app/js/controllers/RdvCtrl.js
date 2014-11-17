angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','redirection','$route','tag',
		function ($scope,rdv,redirection,$route,tag) {
			'use strict';

			$scope.today = new Date();

			$scope.demain = new Date();
			$scope.demain.setTime($scope.demain.getTime() + 24 * 3600 * 1000);

			$scope.slotMinAvailable = 1;
			$scope.slotMaxAvailable = 6;

			$scope.goToParty = function(id){
				redirection.goToRdvId(id);
			};


			$scope.updateTags = function(){
				var aTags = $scope.tags.split(' ');
				$scope.autoCompleteTags = tag.autoCompleteUserTags(aTags,$scope.allTags);

			};

			$scope.autoCompleteTags = [];

			$scope.allTags = [];

			rdv.getFormInfo().then(function(data){
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
