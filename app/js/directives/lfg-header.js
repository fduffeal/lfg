angular.module('myApp.directives')
	.directive('lfgHeader', ['user','gettextCatalog','$routeParams',
		function(user,gettextCatalog,$routeParams) {
			return {
				link: function($scope, element, attrs) {

					if($routeParams.lang){
						gettextCatalog.setCurrentLanguage($routeParams.lang); // Corresponds au header 'Language' du fichier .po;
					}else {
						gettextCatalog.setCurrentLanguage('fr'); // Corresponds au header 'Language' du fichier .po;
					}

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
