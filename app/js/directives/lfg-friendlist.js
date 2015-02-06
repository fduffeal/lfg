angular.module('myApp.directives')
	.directive('lfgFriendlist', ['$window','socket','user','$filter',
		function($window,socket,user,$filter) {
			'use strict';
			return {
				scope:{

				},
				link : function($scope){

					$scope.currentUser = user.get();
					$scope.username = '';

					$scope.allUsers = [];
					$scope.aUsers = [];


					var filterData = function(){

						for (var key in $scope.allUsers) {
							$scope.allUsers[key].connected = false;
							$scope.allUsers[key].me = false;
							$scope.allUsers[key].canAddToFriendList = true;
							$scope.allUsers[key].canAddToBlackList = true;

							if (socket.listUsers[$scope.allUsers[key].username]) {
								$scope.allUsers[key].connected = true;
							}

							if($scope.currentUser !== null && $scope.allUsers[key].username === $scope.currentUser.username){
								$scope.allUsers[key].me = true;
							}
						}

						$scope.aUsers = $filter('filterUser')($scope.allUsers,$scope.username,$scope.onlyFriends);
					};


					var refreshData = function() {
						var getFriendsPromise = user.getFriends();
						if(getFriendsPromise === false){
							return;
						}
						getFriendsPromise.success(function (data, status, headers, config) {
							$scope.allUsers = data;
							filterData();
						});
					};


					$scope.$on('updateListUsers',function(event,data){
						filterData();
					});

					$scope.$watch('username',function(){
						filterData();
					});

					var init = function(){
						refreshData();
						socket.getUserList();
					};

					init();
				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-friendlist.html'
			};
		}
	]
);
