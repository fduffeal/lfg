angular.module('myApp.controllers').controller('TopicCtrl',
	['$scope','$routeParams','forum',
		function ($scope,$routeParams,forum) {
			'use strict';

			var id = $routeParams.id;
			var page = $routeParams.page;
			var result = 20;

			$scope.modeEdit = 1;
			$scope.modeModify = 2;
			$scope.modeDelete = 3;

			$scope.mode = $scope.modeEdit;

			forum.getTopic(id, page, result).success(function(data) {
				$scope.topic = data;
			});

			$scope.submit = function(){
				if($scope.myForm.$valid === false){
					return;
				}
				console.log('REPLY');

				switch($scope.mode){
					case $scope.modeEdit :
						forum.reply(id,$scope.texte,page,result).success(function(data){
							$scope.topic = data;
						});
						break;

					case $scope.modeModify:
						forum.updateMessage(id,$scope.texte).success(function(data){
							$scope.topic = data;
						});
						break;
				}

			}

			$scope.modify = function(message){
				$scope.mode = $scope.modeModify;
				$scope.texte = message.texte;
			}


		}
	]
);
