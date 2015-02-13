angular.module('myApp.controllers').controller('ListUsersCtrl',
	['$scope','$routeParams','user','socket','$filter','rdv',
		function ($scope,$routeParams,user,socket,$filter,rdv) {
			'use strict';


			$scope.currentUser = user.get();

			$scope.sort = 'onlineTime';
			$scope.reverse = true;
			$scope.onlyFriends = false;
			$scope.username = '';
			$scope.aAllUsers = [];

			$scope.plateform = null;


			$scope.aFriendsId = [];
			var updateAFriendsId = function(data){
				$scope.aFriendsId = [];
				for (var key in data) {
					$scope.aFriendsId.push(data[key].id);
				}
			};

			$scope.aFriendsPendingId = [];
			var updateAFriendsPendingId = function(data){
				$scope.aFriendsPendingId = [];
				for (var key in data) {
					$scope.aFriendsPendingId.push(data[key].id);
				}
			};

			$scope.aFriendsRequestPendingId = [];
			var updateAFriendsRequestId = function(data){
				$scope.aFriendsRequestPendingId = [];
				for (var key in data) {
					$scope.aFriendsRequestPendingId.push(data[key].id);
				}
			};

			var refreshData = function() {
				user.getAll().success(function (data, status, headers, config) {
					$scope.aAllUsers = data;
					filterData();
				});
			};

			var filterData = function(){
				for (var key in $scope.aAllUsers){
					$scope.aAllUsers[key].connected = false;
					$scope.aAllUsers[key].me = false;
					$scope.aAllUsers[key].canAddToFriendList = true;
					$scope.aAllUsers[key].canAddToBlackList = true;

					if (socket.listUsers[$scope.aAllUsers[key].username]) {
						$scope.aAllUsers[key].connected = true;
					}

					if($scope.currentUser !== null && $scope.aAllUsers[key].username === $scope.currentUser.username){
						$scope.aAllUsers[key].me = true;
					}

					$scope.aAllUsers[key].isFriend = ($scope.aFriendsId.indexOf($scope.aAllUsers[key].id) > -1);
					$scope.aAllUsers[key].isFriendPending = ($scope.aFriendsPendingId.indexOf($scope.aAllUsers[key].id) > -1);
					$scope.aAllUsers[key].isFriendResquest = ($scope.aFriendsRequestPendingId.indexOf($scope.aAllUsers[key].id) > -1);
				}

				var plateformId = null;
				if(typeof $scope.plateform !== "undefined" && $scope.plateform  !== null){
					plateformId = $scope.plateform.id;
				}

				$scope.aUsers = $filter('filterUser')($scope.aAllUsers,$scope.username,$scope.onlyFriends,plateformId);
			};

			$scope.$watch('username',function(){
				filterData();
			});

			$scope.$watch('plateform',function(){
				filterData();
			});

			$scope.$on('updateListUsers',function(event,data){
				refreshData();
			});

			$scope.addToFriendList = function(friendUsername){
				var addFriendPromise = user.addFriend(friendUsername);
				if(addFriendPromise !== false){
					addFriendPromise.success(function(data){
						updateAFriendsId(data);
						filterData();
					});
				}
			};

			$scope.removeFromFriendList = function(friendUsername){
				var removeFriendPromise = user.removeFriend(friendUsername);
				if(removeFriendPromise !== false){
					removeFriendPromise.success(function(data){
						updateAFriendsId(data);
						filterData();
					});
				}
			};


			var fillPlateforms = function(){
				rdv.getFormInfo().then(function(data){
					$scope.aPlateforms = data.plateforms;
				});
			};


			$scope.invite = function(user){
				$scope.$broadcast('invite',[user]);
			};

			var getFriendRequest = function(){
				var getFriendsRequestPromise = user.getFriends();
				if(getFriendsRequestPromise !== false){
					user.getFriendsRequest().success(function (data, status, headers, config) {
						updateAFriendsRequestId(data);
					}).then(function(data){
						filterData();
					});
				}
			};

			var getFriendsRequestPending = function(){
				var getFriendsRequestPendingPromise = user.getFriends();
				if(getFriendsRequestPendingPromise !== false){
					user.getFriendsPending().success(function (data, status, headers, config) {
						updateAFriendsPendingId(data);
					}).then(function(data){
						filterData();
					});
				}
			};

			var getFriends = function(){
				var getFriendsPromise = user.getFriends();
				if(getFriendsPromise !== false){
					user.getFriends().success(function (data, status, headers, config) {
						updateAFriendsId(data);
					}).then(function(data){
						filterData();
					});
				}
			};

			var init = function(){

				fillPlateforms();

				getFriends();
				getFriendsRequestPending();
				getFriendRequest();

				refreshData();

				socket.getUserList();
			};

			init();

		}
	]
);
