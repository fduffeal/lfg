angular.module('myApp.directives')
	.directive('lfgHeader', ['user','gettextCatalog',
		function(user,gettextCatalog) {
			return {
				link: function($scope, element, attrs) {

					gettextCatalog.setCurrentLanguage('fr'); // Corresponds au header 'Language' du fichier .po;
					gettextCatalog.debug = true;

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
