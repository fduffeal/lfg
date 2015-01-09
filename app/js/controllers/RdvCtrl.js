angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','redirection','$route','tag','lang','$interval','user','bungie','annonce','$timeout','$filter',
		function ($scope,rdv,redirection,$route,tag,lang,$interval,user,bungie,annonce,$timeout,$filter) {
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

			$scope.aCharacters = [];
			$scope.displayFormAnnonce = false;

			$scope.aMyRdv = [];
			$scope.aRdv = [];
			$scope.aRdvNormaux = [];

			$scope.plateformSelected = '';
			$scope.plateformNameSelected = 'ALL';

			$scope.tags = '';

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

				annonce.get().success(function(data) {
					formatAnnonces(data);
					$scope.aRdv = $scope.aAnnoncesFormated.concat($scope.aRdvNormaux);
				});

				rdv.getAll().success(function(data) {
					// this callback will be called asynchronously
					// when the response is available
					for(var key in data){
						data[key].url = $scope.partyWaitingUrlRoot+data[key].id;
					}

					$scope.aRdvNormaux = data;
					$scope.aRdv = $scope.aRdvNormaux.concat($scope.aAnnoncesFormated);

					//filterRdvWithMe:currentUser.id:plateformSelected:tags:slotMinAvailable:slotMaxAvailable
					if($scope.currentUser !== null){
						$scope.aMyRdv = $filter('filterRdvWithMe')(data,$scope.currentUser.id,$scope.plateformSelected,$scope.tags,$scope.slotMinAvailable,$scope.slotMaxAvailable);
					}

				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

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

			$scope.aAnnoncesFormated = [];

			var formatAnnonces = function(aAnnonces){
				var nbAnnonces = aAnnonces.length;

				for(var i=0; i< nbAnnonces;i++){
					$scope.aAnnoncesFormated[i] = {
						'id' : aAnnonces[i].id,
						'leader' : aAnnonces[i].author,
						'game' : aAnnonces[i].game,
						'plateform' : aAnnonces[i].plateform,
						'tags' : aAnnonces[i].tags,
						'description' : aAnnonces[i].description,
						'start' : aAnnonces[i].created,
						'type' : 'type_annonce'
					};
				}
			};

			$scope.blockPostAnnonce = false;
			$scope.messageFormAnnonce = null;
			$scope.addAnnonce = function(){

				$scope.messageFormAnnonce = null;
				$scope.blockPostAnnonce = true;

				var userGameId = $scope.selectedPerso.userGameId;
				var tags = $scope.annonce_tag;
				var description = $scope.annonce_description;
				annonce.create(tags,description,userGameId).success(function(data){
					$scope.annonce_tag = '';
					$scope.annonce_description = '';

					$timeout(function(){
						$scope.blockPostAnnonce = false;
					},2)

					$scope.messageFormAnnonce = 'your annoncement has been send and will appear in few second, please wait';
				}).error(function(data){
					console.error(data);
					$scope.annonce_tag = '';
					$scope.annonce_description = '';

					$timeout(function(){
						$scope.blockPostAnnonce = false;
					},2)

					$scope.messageFormAnnonce = 'an error occured, please try again later, sorry for the inconvenience';

				})
			};

			$scope.type = 'type_all';
		}
	]
);
