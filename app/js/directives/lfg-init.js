angular.module('myApp.directives')
	.directive('lfgInit', ['user','socket',
		function(user,socket) {
			'use strict';
			return {
				scope:{
					'init':'='
				},
				link: function($scope, element, attrs) {
					var currentUser = user.get();
					if(currentUser !== null){
						socket.addUser(currentUser.username);
					}

				},
				restrict: 'E'
			};
		}
	]
);
