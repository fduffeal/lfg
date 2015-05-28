angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','redirection','$route','tag','lang','$interval','user','bungie','annonce','$timeout',
		'$filter','storage','$routeParams','$location',
		function ($scope,rdv,redirection,$route,tag,lang,$interval,user,bungie,annonce,$timeout,
		          $filter,storage,$routeParams,$location) {
			'use strict';

			lang.initLang();

			$scope.currentUser = null;

			$scope.displayhelp = (storage.getPersistant('displayhelp')== 'false')?false:true;

			$scope.showHelp = function(){
				$scope.displayhelp = true;
				storage.setPersistant('displayhelp',$scope.displayhelp);
			}
			$scope.hideHelp = function(){
				$scope.displayhelp = false;
				storage.setPersistant('displayhelp',$scope.displayhelp);
			}

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
			$scope.registerPageUrl = redirection.getRegisterPageUrl();

			$scope.isLive = rdv.isLive;
			$scope.isEnded = rdv.isEnded;

			$scope.aCharacters = [];
			$scope.displayFormAnnonce = false;

			$scope.aMyRdv = [];
			$scope.aRdv = [];
			$scope.aRdvNormaux = [];

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
				setPlateformCookie();
			});

			var formatRdv = function(rdv){
				console.log(rdv);
				for(var key in rdv.users){
					if(rdv.users[key].user.id === rdv.leader.id){
						rdv.author = rdv.users[key];
						rdv.user = rdv.users[key].user;
						rdv.type = 'type_party';
					}
				}
			};

			var arrayUnique = function(array) {
				var a = array.concat();
				for(var i=0; i<a.length; ++i) {
					for(var j=i+1; j<a.length; ++j) {
						if(a[i] === a[j])
							a.splice(j--, 1);
					}
				}
				return a;
			};

			var updateAllRdv = function(){
				updateMyRdv();
				updateRdvLastPlace();
			};

			var addNewData = function(array,newDataArray){
				for(var j=0;j<newDataArray.length;j++){
					var alreadyAdded = false;
					for(var i=0;i< array.length;i++){

						if(newDataArray[j].id === array[i].id && newDataArray[j].type === array[i].type){
							alreadyAdded = true;
						}
					}

					if(alreadyAdded === false){
						array.push(newDataArray[j]);
					}
				}

				updateAllRdv();
			};


			var updateMyRdv = function(){
				//filterRdvWithMe:currentUser.id:plateformSelected:tags:slotMinAvailable:slotMaxAvailable
				if($scope.currentUser !== null){

					if(typeof $scope.plateform === "undefined" || $scope.plateform  === null){
						var plateformId = null;
					}else {
						var plateformId = $scope.plateform.id;
					}

					//if($scope.plateform)
					$scope.aMyRdv = $filter('filterRdvWithMe')($scope.aRdv,$scope.currentUser.id,plateformId,$scope.tags,$scope.slotMinAvailable,$scope.slotMaxAvailable);
					$scope.aMyRdv = $filter('orderBy')($scope.aMyRdv, $scope.predicate, $scope.reverse);
				}
			};

			$scope.aRdvLastPlace =[];
			var updateRdvLastPlace = function(){

				//console.log('$scope.aRdvLastPlace',$scope.aRdvLastPlace,$scope.aRdv);

				if(typeof $scope.plateform === "undefined" || $scope.plateform  === null){
					var plateformId = null;
				}else {
					var plateformId = $scope.plateform.id;
				}

				$scope.aRdvLastPlace = $filter('filterRdvLastPlace')($scope.aRdv,plateformId,$scope.tags,false,false,true,$scope.slotMinAvailable,$scope.slotMaxAvailable,$scope.type);
				$scope.aRdvLastPlace = $filter('orderBy')($scope.aRdvLastPlace, $scope.predicate, $scope.reverse);
			};



			var refreshRdvData = function(){

				annonce.get().success(function(data) {
					addNewData($scope.aRdv,formatAnnonces(data));
				});

				rdv.getAll().success(function(data) {
					// this callback will be called asynchronously
					// when the response is available
					for(var key in data){
						data[key].url = $scope.partyWaitingUrlRoot+data[key].id;
						formatRdv(data[key]);
					}
					addNewData($scope.aRdv,data);

				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

			$scope.displayWelcome = ($route.current.action === 'welcome');

			//autoRefresh
			var refreshTime = 20000;
			var autoRefreshData = function(){
				$scope.intervalId = $interval(function(){
					refreshRdvData();
				}, refreshTime);
			};


			$scope.getDestinyCharacters = function(){
				bungie.getCharacters($scope.plateformAnnonce.id,$scope.plateformAnnonce.bungiePlateformId,$scope.gamertag).success(function(data){
					$scope.aCharacters = data;
				}).error(function(data){
					$scope.aCharacters = [];
				});
			};

			$scope.selectedPerso = null;

			$scope.aAnnoncesFormated = [];

			var formatAnnonce = function(annonce){
				return {
					'id' : annonce.id,
					'author' : annonce.author,
					'game' : annonce.game,
					'plateform' : annonce.plateform,
					'tags' : annonce.tags,
					'description' : annonce.description,
					'start' : annonce.created,
					'type' : 'type_annonce',
					'user' : annonce.user
				};
			};

			var formatAnnonces = function(aAnnonces){
				var nbAnnonces = aAnnonces.length;


				for(var i=0; i< nbAnnonces;i++){
					aAnnonces[i] = formatAnnonce(aAnnonces[i]);
				}

				return aAnnonces;
			};



			$scope.blockPostAnnonce = false;
			$scope.messageFormAnnonce = null;
			$scope.addAnnonce = function(){

				$scope.messageFormAnnonce = null;
				$scope.blockPostAnnonce = true;

				var userGameId = $scope.selectedPerso.id;
				var tags = $scope.annonce_tag;
				var description = $scope.annonce_description;
				annonce.create(tags,description,userGameId).success(function(data){
					$scope.annonce_tag = '';
					$scope.annonce_description = '';

					$timeout(function(){
						$scope.blockPostAnnonce = false;
					},2)

					$scope.messageFormAnnonce = 'your annoncement has been send and will appear in few second, please wait';

					var newAnnonce = [];
					newAnnonce.push(formatAnnonce(data));


					addNewData($scope.aRdv,newAnnonce);

				}).error(function(data){
					$scope.annonce_tag = '';
					$scope.annonce_description = '';

					$timeout(function(){
						$scope.blockPostAnnonce = false;
					},2)

					$scope.messageFormAnnonce = 'an error occured, please try again later, sorry for the inconvenience';

				})
			};


			var setTypeFilter = function(){
				var type_rdv = storage.getPersistant('cookie_type_rdv');
				if(typeof type_rdv === "undefined"){
					$scope.type = 'type_all';
				} else {
					$scope.type = type_rdv;
				}
				$scope.$watch('type',function(newValue, oldValue){
					storage.setPersistant('cookie_type_rdv',newValue);
					updateAllRdv();
				});
			};

			var setPlateformCookie = function(){
				var plateform_rdv = storage.getPersistant('cookie_plateform_rdv_id');
				var plateform_rdv_url = $routeParams.plateform;

				if(typeof plateform_rdv_url !== "undefined"){
					plateform_rdv_url = plateform_rdv_url.replace('_',' ');
					for(var key in $scope.aPlateforms){
						if($scope.aPlateforms[key].nom == plateform_rdv_url){
							$scope.plateform = $scope.aPlateforms[key];
						}
					}
				} else if(typeof plateform_rdv !== "undefined"){
					for(var key in $scope.aPlateforms){
						if($scope.aPlateforms[key].id == plateform_rdv){
							$scope.plateform = $scope.aPlateforms[key];
						}
					}
				}

				$scope.$watch('plateform',function(newValue, oldValue){

					var homeUrl = redirection.getHomePageDestinyUrl();
					if(typeof newValue !== "undefined" && newValue !== null){
						storage.setPersistant('cookie_plateform_rdv_id',newValue.id);
						var plateformNameUrl = newValue.nom.replace(' ','_');
						//$location.path(homeUrl+plateformNameUrl).replace();
					}else {
						storage.erasePersistant('cookie_plateform_rdv_id');
						//$location.path(homeUrl).replace();
					}

					updateAllRdv();
				});
			};

			var initTags = function(){
				$scope.$watch('tags',function(newValue,oldValue){
					if(newValue !== '' || oldValue !== ''){
						$location.search('tags', newValue);
						updateAllRdv();
					}
				});

				var searchObject = $location.search();
				if(searchObject.tags){
					$scope.tags = searchObject.tags;
				}
			};


			/**
			 * launch after init !
			 */
			var launchRdvCtrl = function(){
				refreshRdvData();
				autoRefreshData();
				setTypeFilter();
				initTags();
			};



			$scope.$on('updateListUsers',function(event,data){
				if(data[0]){
					$scope.listUser = data[0];
				}
			});

			/**
			 * init : connect and launch
			 */
			var init = function(){
				$scope.currentUser = user.get();
				launchRdvCtrl();
			};

			init();
		}
	]
);
