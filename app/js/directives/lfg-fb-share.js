angular.module('myApp.directives')
	.directive('lfgFbShare', ['$location',
		function($location) {
			'use strict';
			return {
				scope: {
					url:'@'
				},
				link : function($scope){

					if(!$scope.url){
						$scope.url = $location.absUrl();
					} else {
						$scope.url = 'http://'+$location.host()+$scope.url;
					}

					$scope.shareFB = function(){
						FB.ui({
							method: 'share',
							href:$scope.url
						}, function(response){
							console.log(response);
						});
					};
				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-fb-share.html'
			};
		}
	]
);
