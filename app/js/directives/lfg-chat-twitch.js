angular.module('myApp.directives')
	.directive('lfgChatTwitch', ['$sce',
		function($sce) {
			'use strict';
			return {
				scope:{
					url : '='
				},
				link: function($scope, element, attrs) {

					$scope.isTwitch = $scope.url.match(/twitch/);


					$scope.urlChat =  $scope.url.replace('/embed','/chat?popout=');

					$scope.trustSrc = function(src) {
						return $sce.trustAsResourceUrl(src);
					};

				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-chat-twitch.html'
			};
		}
	]
);
