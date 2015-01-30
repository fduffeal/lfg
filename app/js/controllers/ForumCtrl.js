angular.module('myApp.controllers').controller('ForumCtrl',
	['$scope','$routeParams','forum','redirection','$location','$route','meta','user',
		function ($scope,$routeParams,forum,redirection,$location,$route,meta,user) {
			'use strict';

			$scope.currentUser = user.get();

			$scope.registerUrl = redirection.getRegisterPageUrl();
			$scope.loginUrl = redirection.getLoginPageUrl();


			meta.setDescription('Esbattle.com | Forum');
			forum.getAllTopic().success(function(data) {
				for(var key in data){
					data[key].url = redirection.getTopicUrl(data[key]);
				}
				$scope.aTopic = data;
			});

			$scope.submit = function(){
				if($scope.myForm.$valid === false){
					return;
				}

				var createTopicPromise = forum.createTopic($scope.title,$scope.texte);

				if(createTopicPromise === null){
					redirection.goToLogin();
				}

				createTopicPromise.success(function(data){
					var url = redirection.getTopicUrl(data,1)
					$location.path(url);
				});
			}

			$scope.refresh = function(){
				$route.reload();
			}
		}
	]
);
