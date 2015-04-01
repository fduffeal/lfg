angular.module('myApp.controllers').controller('HomeCtrl',
	['$scope', '$routeParams', 'forum', 'redirection', '$anchorScroll', '$location', '$timeout', 'user', 'rdv','$filter','partenaire',
		function ($scope, $routeParams, forum, redirection, $anchorScroll, $location, $timeout, user, rdv,$filter,partenaire) {
			'use strict';
			/*$scope.msg = $routeParams.msg;
			 console.log($scope.msg);*/
			$scope.currentUser = user.get();
			$scope.texte = "";

			$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();

			$scope.indexCarrousel = 0;

			$scope.aCarrousel = [];

			var firstCover = {
				document : {
					src: "http://api.esbattle.com/uploads/documents/4e4a85d6da2e032797f4d89ebd2111fcc7fc163a.jpeg"
				},
				url : ''
			};

			$scope.aCarrousel.push(firstCover);

			$scope.prevCarrousel = function () {
				if ($scope.indexCarrousel > 0) {
					$scope.indexCarrousel--;
				} else {
					$scope.indexCarrousel = $scope.aCarrousel.length-1;
				}
			};

			$scope.nextCarrousel = function () {
				if ($scope.indexCarrousel < $scope.aCarrousel.length-1) {
					$scope.indexCarrousel++;
				} else {
					$scope.indexCarrousel = 0;
				}
			};

			$scope.goCarrousel = function(index){
				$scope.indexCarrousel = index;
			};

			var autoChangeCarrousel = function(){
				if ($scope.indexCarrousel < $scope.aCarrousel.length-1) {
					$scope.indexCarrousel++;
				} else {
					$scope.indexCarrousel = 0;
				}

				$timeout(function(){
					autoChangeCarrousel();
				},10000);
			};


			forum.getNews().success(function (data) {

				$scope.aTopic = data;

				//var regex = /<img[ a-z="\/:.0-9\-_]{0,}>/i;

				for (var i = 0; i < $scope.aTopic.length; i++) {

					$scope.aTopic[i].url = redirection.getTopicUrl($scope.aTopic[i]);

					$scope.aTopic[i].message.texteBrut = $filter('filterWords')($scope.aTopic[i].message.texteBrut, 26);

					if ($scope.aTopic[i].document !== null) {
						$scope.aCarrousel.push($scope.aTopic[i]);
					}
				}
			});

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
					$scope.aRdv = $filter('orderBy')(data, $scope.predicate, $scope.reverse);

				}).error(function (data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

			refreshRdvData();

			$timeout(function(){
				autoChangeCarrousel();
			},10000);

			$scope.indexPage = 0;
			$scope.nbItemByPage = 10;
			$scope.updateIndexPage = function(indexPage){
				$scope.indexPage = indexPage;
			};

		}
	]
);
