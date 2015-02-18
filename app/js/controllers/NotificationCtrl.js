angular.module('myApp.controllers').controller('NotificationCtrl',
    ['$scope','$routeParams','redirection','rdv','$filter','user','$interval','$rootScope',
        function ($scope,$routeParams,redirection,rdv,$filter,user,$interval,$rootScope) {
            'use strict';

	        $scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
	        $scope.listUsersUrl = redirection.getListUsersUrl();

	        $scope.userInfo = user.get();

	        $scope.displayNew = true;

	        $scope.displayNewfn = function(){
		        $scope.displayNew = true;
	        };

	        $scope.displayAllfn = function(){
		        $scope.displayNew = false;
	        };
	        /**
	         * autoRefreshDataNotif
	         */
	        var refreshDataNotif = function(){

		        var promiseNotification = rdv.getNotifications();

		        if(promiseNotification === false){
			        return;
		        }
		        promiseNotification.success(function(data){
			        $scope.notifications = data;
		        });
	        };

	        $scope.markRead = function(id){
		        var promiseMarkNotificationRead = rdv.markNotificationRead(id);

		        if(promiseMarkNotificationRead === false){
			        return;
		        }
		        promiseMarkNotificationRead.success(function(data){
			        $scope.notifications = data;
		        });
	        };

	        $scope.markAllAsRead = function(){
		        var listId = [];
		        for(var key in $scope.notifications){
			        listId.push($scope.notifications[key].id);
		        }

		        $scope.markRead(listId.join('-'));
	        };

	        /**
	         * autoRefreshDataNotif
	         */
	        var getAllNotif = function(){

		        var promiseNotification = rdv.getAllNotifications();

		        if(promiseNotification === false){
			        return;
		        }
		        promiseNotification.success(function(data){
			        $scope.allNotifications = data;
		        });
	        };

	        refreshDataNotif();
	        getAllNotif();
        }
    ]
);
