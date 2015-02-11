angular.module('myApp.controllers').controller('NotificationCtrl',
    ['$scope','$routeParams','redirection','rdv','$filter','user','$interval','$rootScope',
        function ($scope,$routeParams,redirection,rdv,$filter,user,$interval,$rootScope) {
            'use strict';

	        $scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();

	        $scope.userInfo = user.get();
	        /**
	         * autoRefreshDataNotif
	         */
	        var refreshDataNotif = function(){

		        var promiseNotification = rdv.getNotifications();

		        if(promiseNotification === false){
			        return;
		        }
		        promiseNotification.success(function(data){
			        if($scope.userInfo === null){
				        return;
			        }
			        $scope.notifications = data;
			        $rootScope.notificationsAlreadyRead = $scope.notifications;
		        });
	        };

	        var refreshTime = 12000;
	        var autoRefreshDataNotif = function(){
		        $interval.cancel($scope.intervaNotificationId);

		        if (angular.isDefined($scope.intervaNotificationId)) {
			        return;
		        }

		        $scope.intervaNotificationId = $interval(function(){
			        refreshDataNotif();
		        }, refreshTime);
	        };

	        refreshDataNotif();
	        autoRefreshDataNotif();
        }
    ]
);
