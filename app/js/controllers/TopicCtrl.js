angular.module('myApp.controllers').controller('TopicCtrl',
	['$scope','$routeParams','forum','redirection','$anchorScroll','$location','$timeout','user','$route',
		function ($scope,$routeParams,forum,redirection,$anchorScroll,$location,$timeout,user,$route) {
			'use strict';

			var id = $routeParams.id;
			var page = $routeParams.page;
			$scope.currentPage = parseInt(page);
			var result = 20;

			$scope.currentUser = user.get();

			$scope.canPost = false;
			$scope.modeEdit = 1;
			$scope.modeModify = 2;

			$scope.aPage = [];

			$scope.mode = $scope.modeEdit;

			$scope.forumUrl = redirection.getForumUrl();

			var setTopicData = function(data){
				$scope.topic = data;
				$scope.nbPage = Math.ceil(data.topic.nbMessages/result);

				$scope.aPage = [];
				for(var i = 0;i< $scope.nbPage;i++){
					$scope.aPage.push(redirection.getTopicUrl($scope.topic.topic,i+1));
				}
				$scope.canPost = true;
			}

			$scope.goToLastPage = function(){
				if($scope.aPage.length > $scope.currentPage){
					$location.path($scope.aPage[$scope.aPage.length-1]);
				}
			}

			forum.getTopic(id, page, result).success(function(data) {
				setTopicData(data);
			});

			$scope.submit = function(){
				if($scope.myForm.$valid === false){
					return;
				}
				switch($scope.mode){
					case $scope.modeEdit :
						forum.reply(id,$scope.texte,page,result).success(function(data){
							setTopicData(data);

							$scope.goToLastPage();
							$scope.goToBottom();
						});
						break;

					case $scope.modeModify:
						forum.updateMessage($scope.messageId,$scope.texte,page,result).success(function(data){
							setTopicData(data);
							$scope.goToBottom();
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
					setTopicData(data);

					$scope.goToBottom();
				});
			}

			$scope.goToBottom = function(){

				$timeout(function(){
					$location.hash('bottom');
					$anchorScroll();
				},0);

			}

			$scope.refresh = function(){
				$route.reload();
			}
		}
	]
);
