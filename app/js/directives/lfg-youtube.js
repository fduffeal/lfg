angular.module('myApp.directives')
	.directive('lfgYoutube', [
		function() {
			'use strict';
			return {
				scope:{
					url : '=',
					height: '=',
					width: '='
				},
				link: function($scope, element, attrs) {

					$scope.isYoutube = $scope.url.match(/youtube/);

					var ids = $scope.url.match(/(\?|&)v=[^&]*/);

					var h = 390;
					if($scope.height > 0){
						h = $scope.height;
					}

					var w = 640;
					if($scope.width > 0){
						w = $scope.width;
					}

					// 3. This function creates an <iframe> (and YouTube player)
					//    after the API code downloads.
					var player;
					$scope.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
						player = new YT.Player(element[0], {
							height: h,
							width: w,
							videoId: ids[0].substring(3),
							html5:1,
							events: {
								'onReady': onPlayerReady,
								'onStateChange': onPlayerStateChange
							}
						});
					};

					// 4. The API will call this function when the video player is ready.
					function onPlayerReady(event) {
						//event.target.playVideo();
					}

					// 5. The API calls this function when the player's state changes.
					//    The function indicates that when playing a video (state=1),
					//    the player should play for six seconds and then stop.
					var done = false;
					function onPlayerStateChange(event) {
						if (event.data == YT.PlayerState.PLAYING && !done) {
							setTimeout(stopVideo, 6000);
							done = true;
						}
					}
					function stopVideo() {
						player.stopVideo();
					}

					if($scope.isYoutube){
						$scope.onYouTubeIframeAPIReady();
					}

				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-youtube.html'
			};
		}
	]
);
