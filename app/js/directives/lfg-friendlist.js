angular.module('myApp.directives')
	.directive('lfgFriendlist', ['$window','socket','user','$filter','redirection',
		function($window,socket,user,$filter,redirection) {
			'use strict';
			return {
				scope:{

				},
				link : function($scope){

					$scope.currentUser = user.get();
					$scope.username = '';

					$scope.allUsers = [];
					$scope.aUsers = [];

					$scope.ready = false;

					$scope.listUsersUrl = redirection.getListUsersUrl();

					$scope.firstDisplay = 0;

					$scope.scrollUp=function(){
						$scope.firstDisplay--;
					};

					$scope.scrollDown=function(){
						$scope.firstDisplay++;
					};


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
							$scope.ready = true;
							return;
						}
						getFriendsPromise.success(function (data, status, headers, config) {
							$scope.allUsers = data;
							filterData();
							$scope.ready = true;
						});
					};


					$scope.$on('updateListUsers',function(event,data){
						filterData();
					});

					$scope.$watch('username',function(){
						$scope.firstDisplay = 0;
						filterData();
					});

					var init = function(){
						refreshData();
						socket.getUserList();
					};

					$scope.invite = function(user){
						$scope.$broadcast('invite',[user]);
					};

					init();
				},
				restrict: 'E',
				templateUrl: '/html/directives/lfg-friendlist.html'
			};
		}
	]
);
