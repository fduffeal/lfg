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


					var filterData = function(){
						$scope.aUsers = $filter('filterUser')($scope.allUsers,$scope.username,$scope.onlyFriends);
					};


					var refreshData = function() {
						var getFriendsPromise = user.getFriends();
						if(getFriendsPromise === false){
							return;
						}
						getFriendsPromise.success(function (data, status, headers, config) {
							for (var key in data) {
								data[key].connected = false;
								data[key].me = false;
								data[key].canAddToFriendList = true;
								data[key].canAddToBlackList = true;

								if (socket.listUsers[data[key].username]) {
									data[key].connected = true;
								}

								if($scope.currentUser !== null && data[key].username === $scope.currentUser.username){
									data[key].me = true;
								}
							}

							$scope.allUsers = data;
							filterData();
						});
					};


					$scope.$on('updateListUsers',function(event,data){
						refreshData();
					});

					$scope.$watch('username',function(){
						filterData();
					});

					var init = function(){
						refreshData();
						socket.getUserList();
					};


				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-friendlist.html'
			};
		}
	]
);
