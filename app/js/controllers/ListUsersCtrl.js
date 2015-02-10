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

			$scope.aRdv = [];

			var getRdv = function(){
				rdv.getAll().success(function(data) {
					// this callback will be called asynchronously
					// when the response is available
					$scope.aRdv = data;

					updateMyRdv();

				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}


			$scope.rdvInvit = null;
			var updateMyRdv = function(){
				//filterRdvWithMe:currentUser.id:plateformSelected:tags:slotMinAvailable:slotMaxAvailable
				if($scope.currentUser !== null){

					if(typeof $scope.plateform === "undefined" || $scope.plateform  === null){
						var plateformId = null;
					}else {
						var plateformId = $scope.plateform.id;
					}



					//if($scope.plateform)
					$scope.aMyRdv = $filter('filterRdvWithMe')($scope.aRdv,$scope.currentUser.id,plateformId,$scope.tags,$scope.slotMinAvailable,$scope.slotMaxAvailable);

					for(var i in $scope.aMyRdv){
						$scope.aMyRdv[i].description = $scope.aMyRdv[i].description +' '+ $filter('date')($scope.aMyRdv[i].start*1000,'yyyy-MM-dd');
					}
					$scope.rdvInvit = $scope.aMyRdv[0];
				}
			};

			$scope.invit = function(){
				console.log($scope.rdvInvit);
			};


			var init = function(){

				fillPlateforms();
				getRdv();

				var getFriendsPromise = user.getFriends();
				if(getFriendsPromise !== false){
					user.getFriends().success(function (data, status, headers, config) {
						updateAFriendsId(data);
					}).then(function(data){
						refreshData();
					});
				}

				socket.getUserList();
			};

			init();

		}
	]
);
