angular.module('myApp.controllers').controller('ListUsersCtrl',
	['$scope','$routeParams','user','socket',
		function ($scope,$routeParams,user,socket) {
			'use strict';

			var refreshData = function() {

				user.getAll().success(function (data, status, headers, config) {
					console.log(data);
					console.log('listuser ctrl', socket.listUsers);

					for (var key in data) {
						data[key].connected = false;
						if (socket.listUsers[data[key].username]) {
							data[key].connected = true;
						}
					}

					$scope.aUsers = data;
				});
			};

			refreshData();
			socket.getUserList();

			$scope.$on('updateListUsers',function(event,data){
				console.log('updateListUsers',data);
				refreshData();
			});

		}
	]
);
