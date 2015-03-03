angular.module('myApp.controllers').controller('HomeCtrl',
	['$scope','$routeParams','forum','redirection','$anchorScroll','$location','$timeout','user','rdv',
	function ($scope,$routeParams,forum,redirection,$anchorScroll,$location,$timeout,user,rdv) {
			'use strict';
			/*$scope.msg = $routeParams.msg;
			console.log($scope.msg);*/
			$scope.currentUser = user.get();
			$scope.texte = "";


			forum.getAllTopic().success(function(data) {
				$scope.aTopic = data;

				/*for(var i = 0;i< $scope.aTopic.length-1;i++){
					forum.getTopic($scope.aTopic[i].id, 1, 1).success(function(data) {
						$scope.aTopic[i].message = data.messages[0].texte;
					});
				}*/
			});


			var formatRdv = function(rdv){
				for(var key in rdv.users){
					if(rdv.users[key].user.id === rdv.leader.id){
						rdv.author = rdv.users[key];
						rdv.user = rdv.users[key].user;
						rdv.type = 'type_party';
					}
				}
			};
			var refreshRdvData = function(){

				rdv.getAll().success(function(data) {
					// this callback will be called asynchronously
					// when the response is available
					for(var key in data){
						data[key].url = $scope.partyWaitingUrlRoot+data[key].id;
						formatRdv(data[key]);
					}
					$scope.aRdv = data;

				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			};

		}
	]
);
