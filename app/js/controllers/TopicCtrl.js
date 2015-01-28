angular.module('myApp.controllers').controller('TopicCtrl',
	['$scope','$routeParams','forum',
		function ($scope,$routeParams,forum) {
			'use strict';

			var id = $routeParams.id;
			var page = $routeParams.page;
			var result = 20;

			$scope.modeEdit = 1;
			$scope.modeModify = 2;

			$scope.mode = $scope.modeEdit;

			forum.getTopic(id, page, result).success(function(data) {
				$scope.topic = data;
			});

			$scope.submit = function(){
				if($scope.myForm.$valid === false){
					return;
				}
				switch($scope.mode){
					case $scope.modeEdit :
						forum.reply(id,$scope.texte,page,result).success(function(data){
							$scope.topic = data;
						});
						break;

					case $scope.modeModify:
						forum.updateMessage($scope.messageId,$scope.texte,page,result).success(function(data){
							$scope.topic = data;
						});
						break;

					default:
						break;
				}

				$scope.texte = "";
				$scope.mode = $scope.modeEdit;

			}

			$scope.modify = function(message){
				$scope.mode = $scope.modeModify;
				$scope.messageId = message.id;
				$scope.texte = message.texte.replace(/<br\/>/ig,'\n');
			}

			$scope.delete = function(message){
				forum.deleteMessage(message.id,page,result).success(function(data){
					$scope.topic = data;
				});
			}
		}
	]
);
