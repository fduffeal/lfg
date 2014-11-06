angular.module('myApp.directives')
	.directive('lfgHeader', ['user',
		function(user) {
			return {
				link: function($scope, element, attrs) {

					$scope.logout = function(){
						user.logout();
						$scope.userInfo = null;
					};

                    $scope.userInfo = user.get();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);
