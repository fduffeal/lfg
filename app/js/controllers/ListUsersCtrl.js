angular.module('myApp.controllers').controller('ListUsersCtrl',
	['$scope','$routeParams','user','socket',
		function ($scope,$routeParams,user,socket) {
			'use strict';


			var currentUser = null;

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

						if(currentUser !== null && data[key].username === currentUser.username){
							data[key].me = true;
						}
					}

					$scope.aUsers = data;
				});

			};


			var init = function(){
				var refreshPromise = user.refresh();
				if(refreshPromise !== false){
					refreshPromise.success(function(data){
						console.log('user refresh',data);
						currentUser = data;
						socket.getUserList();
					});
				} else {
					socket.getUserList();
				}
			};


			$scope.$on('updateListUsers',function(event,data){
				console.log('updateListUsers',data);
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

			init();

		}
	]
);
