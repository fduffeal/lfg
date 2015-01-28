angular.module('myApp.directives')
	.directive('lfgPagination', [
		function() {
			return {
				scope:{
					aPage: '=',
					currentPage : '=',
					maxPage:'='
				},
				link: function($scope, element, attrs) {
					$scope.maxPageDisplayedWithoutFirstAndLast = $scope.maxPage-2;
				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-pagination.html'
			};
		}
	]
);
