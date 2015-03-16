angular.module('myApp.directives')
	.directive('lfgFbShare', ['$location',
		function($location) {
			'use strict';
			return {
				link : function($scope){

					$scope.shareFB = function(){
						FB.ui({
							method: 'share',
							href:$location.absUrl()
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
