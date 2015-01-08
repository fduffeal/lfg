angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','redirection','$route','tag','lang','$interval','user','bungie',
		function ($scope,rdv,redirection,$route,tag,lang,$interval,user,bungie) {
			'use strict';

			lang.initLang();

			$scope.currentUser = user.get();

			$scope.predicate = 'start';
			$scope.reverse = true;

			$scope.now = new Date();

			$scope.demain = new Date();
			$scope.demain.setTime($scope.demain.getTime() + 24 * 3600 * 1000);

			$scope.slotMinAvailable = 0;
			$scope.slotMaxAvailable = 6;

			$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
			$scope.partyCreateUrl = redirection.getCreatePartyPageUrl();
			$scope.annonceCreateUrl = redirection.getAnnonceCreateUrl();

			$scope.isLive = rdv.isLive;
			$scope.isEnded = rdv.isEnded;

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


			var refreshRdvData = function(){
				rdv.getAll().success(function(data) {
					// this callback will be called asynchronously
					// when the response is available
					$scope.aRdv = data;
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			};

			$scope.plateformSelected = '';
			$scope.plateformNameSelected = 'ALL';
			$scope.updatePlateform = function(id,nom){
				$scope.plateformSelected = id;
				$scope.plateformNameSelected = nom;
			};

			$scope.displayWelcome = ($route.current.action === 'welcome');

			//autoRefresh
			var refreshTime = 12000;
			var autoRefreshData = function(){
				$scope.intervalId = $interval(function(){
					refreshRdvData();
				}, refreshTime);
			};


			$scope.getDestinyCharacters = function(){
				bungie.getCharacters($scope.plateform.id,$scope.plateform.bungiePlateformId,$scope.gamertag).success(function(data){
					$scope.aCharacters = data;
				}).error(function(data){
					$scope.aCharacters = [];
				});
			};

			$scope.selectedPerso = null;
			$scope.selectPerso = function(persoSelected){
				$scope.selectedPerso = persoSelected;
			};
			//init
			refreshRdvData();
			autoRefreshData();
		}
	]
);
