angular.module('myApp.controllers').controller('HomeCtrl',
	['$scope', '$routeParams', 'forum', 'redirection', '$anchorScroll', '$location', '$timeout', 'user', 'rdv',
		function ($scope, $routeParams, forum, redirection, $anchorScroll, $location, $timeout, user, rdv) {
			'use strict';
			/*$scope.msg = $routeParams.msg;
			 console.log($scope.msg);*/
			$scope.currentUser = user.get();
			$scope.texte = "";

			$scope.indexCarrousel = 0;

			$scope.prevCarrousel = function () {
				if ($scope.indexCarrousel > 0) {
					$scope.indexCarrousel--;
				}
			};

			$scope.nextCarrousel = function () {
				if ($scope.indexCarrousel < $scope.aCarrousel.length-1) {
					$scope.indexCarrousel++;
				}
			};

			$scope.goCarrousel = function(index){
				$scope.indexCarrousel = index;
			};


			forum.getNews().success(function (data) {

				$scope.aCarrousel = [];

				$scope.aTopic = data;

				var regex = /<img[ a-z="\/:.0-9\-_]{0,}>/i;
				for (var i = 0; i < $scope.aTopic.length; i++) {
					var match = $scope.aTopic[i].message.texte.match(regex);
					if (match !== null) {
						$scope.aTopic[i].image = match[0];
						$scope.aTopic[i].message.texte = $scope.aTopic[i].message.texte.replace(regex, '');

					}
					$scope.aTopic[i].url = redirection.getTopicUrl($scope.aTopic[i]);

					if ($scope.aTopic[i].document !== null) {
						$scope.aCarrousel.push($scope.aTopic[i]);
					}
				}
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
					$scope.aRdv = data;

				}).error(function (data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

			refreshRdvData();

		}
	]
);
