angular.module('myApp.directives')
	.directive('lfgMeta', ['meta','$rootScope',
		function(meta,$rootScope) {
			'use strict';
			return {
				scope:{
					'name': '@'
				},
				link: function($scope, element, attrs) {
					element[0].name = $scope.name;

					var content = '';
					switch($scope.name){
						case 'description':
							content = $rootScope.description;
							$rootScope.$watch('description',function(newValue,oldValue){
								element[0].content = newValue;
							});
							break;

						default :
							content =  $rootScope.description;
							break;


					}
					element[0].content = content;


				},
				restrict: 'E',
				replace: true,
				templateUrl: '/html/directives/lfg-meta.html'
			};
		}
	]
);
