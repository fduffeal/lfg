angular.module('myApp.controllers').controller('ListUsersCtrl',
	['$scope','$routeParams','user','socket','$filter',
		function ($scope,$routeParams,user,socket,$filter) {
			'use strict';


			$scope.currentUser = user.get();

			$scope.sort = 'onlineTime';
			$scope.reverse = true;
			$scope.onlyFriends = false;
			$scope.username = '';

			var refreshData = function() {
				user.getAll().success(function (data, status, headers, config) {
					console.log(data);
					console.log('listuser ctrl', socket.listUsers);

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

					$scope.aUsers = data;
					filterData();
				});
			};

			var filterData = function(){
				$scope.aUsers = $filter('filterUser')($scope.aUsers,$scope.username,$scope.onlyFriends);
			};

			$scope.$watch('username',function(){
				filterData();
			});

			$scope.$on('updateListUsers',function(event,data){
				refreshData();
			});

			$scope.addToFriendList = function(friendUsername){
				var addFriendPromise = user.addFriend(friendUsername);
				if(addFriendPromise !== false){
					addFriendPromise(friendUsername).success(function(data){

					});
				}
			};

			$scope.removeFromFriendList = user.removeFriend;


			var init = function(){
				socket.getUserList();
			};

			init();

		}
	]
);
