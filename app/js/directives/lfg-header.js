angular.module('myApp.directives')
	.directive('lfgHeader', ['user',
		function(user) {
			return {
				link: function($scope, element, attrs) {
                    $scope.email = '';
                    $scope.password = '';

                    $scope.login = function(email,password){
                        user.log(email,password).success(function(data){
                            $scope.userInfo = data;
                        })
                    };

                    $scope.userInfo = user.get();
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);
