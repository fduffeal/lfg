angular.module('myApp.controllers').controller('HomeCtrl',
	['$scope', '$routeParams', 'forum', 'redirection', '$anchorScroll', '$location', '$timeout', 'user', 'rdv','$filter','partenaire','planification','$sce',
		function ($scope, $routeParams, forum, redirection, $anchorScroll, $location, $timeout, user, rdv,$filter,partenaire,planification,$sce) {
			'use strict';
			/*$scope.msg = $routeParams.msg;
			 console.log($scope.msg);*/
			$scope.currentUser = user.get();
			$scope.texte = "";

			$scope.aTopic = [];

			$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
			$scope.rdvUrl = redirection.getHomePageDestinyUrl();

			var firstCover = {
				document : {
					src: "http://api.esbattle.com/uploads/documents/4e4a85d6da2e032797f4d89ebd2111fcc7fc163a.jpeg"
				},
				url : ''
			};

			partenaire.getAll().success(function (data) {

				for(var key in data){
					if(data[key].blocHomeLink == ''){
						data[key].blocHomeLink = redirection.getPartenaireByIdUrl(data[key]);
					}
				}

				$scope.partenaires = data;
			});


			var formatRdv = function (rdv) {
				for (var key in rdv.users) {
					if (rdv.users[key].user.id === rdv.leader.id) {
						rdv.author = rdv.users[key];
						rdv.user = rdv.users[key].user;
						rdv.type = 'type_party';
					}
				}
			};


			var plateformId = null;
			if($scope.currentUser !== null && $scope.currentUser.userGame[0] && $scope.currentUser.userGame[0].plateform){
				plateformId = $scope.currentUser.userGame[0].plateform.id;
			}

			var refreshRdvData = function () {

				rdv.getAll().success(function (data) {
					// this callback will be called asynchronously
					// when the response is available
					for (var key in data) {
						data[key].url = $scope.partyWaitingUrlRoot + data[key].id;
						formatRdv(data[key]);
					}
					$scope.predicate = 'start';
					$scope.reverse = true;

					//items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,nbPlaceAvailableMin,nbPlaceAvailableMax,type
					$scope.aRdv = $filter('filterRdvLastPlace')(data, plateformId,[],false,true,true,1,5,'type_party');

					if($scope.aRdv.length < 2){
						$scope.aRdv = $filter('orderBy')(data, $scope.predicate,$scope.reverse);

					}

				}).error(function (data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

			var offsetNews = 0;
			var limitNews = 13;
			$scope.displayAddNews = true;
			$scope.addNews = function(){
				forum.getNews(offsetNews,limitNews).success(function (data) {

					var nbNewsToDisplay = data.length-1;
					if(data.length !== limitNews){
						$scope.displayAddNews = false;
						nbNewsToDisplay = data.length;
					}

					for (var i = 0; i < nbNewsToDisplay; i++) {
						data[i].url = redirection.getTopicUrl(data[i]);
						data[i].message.texteBrut = $filter('filterWords')(data[i].message.texteBrut, 26);

						data[i].dateFormated = $filter('filterDateNews')(data[i].created);

						$scope.aTopic.push(data[i]);
						offsetNews++;
					}
				});
			};

			var self = this;

			//$sce.trustAsResourceUrl('http://www.youtube.com/');

			$scope.trustSrc = function(src) {
				return $sce.trustAsResourceUrl(src);
			};

			var getPlanification = function(){
				planification.getCurrent().success(function(data){
					$scope.planification = data;
					$timeout(function(){
						$scope.masonry.reloadItems();
						$scope.masonry.layout();
					},15000)
				});
			};

			var getNextPlanification = function(){
				planification.getNext().success(function(data){
					$scope.aNextPlanifications = data;
					$scope.masonry.reloadItems();
					$scope.masonry.layout();
				});
			};

			refreshRdvData();
			$scope.addNews();
			getPlanification();
			getNextPlanification();

			var container = document.querySelector('#container');
			$scope.masonry = new Masonry( container, {
				// options
				columnWidth: '.grid-sizer',
				itemSelector: '.article',
				gutter: 10,
				percentPosition: true
			});
		}
	]
);
