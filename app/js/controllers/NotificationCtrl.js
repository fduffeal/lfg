angular.module('myApp.controllers').controller('NotificationCtrl',
    ['$scope','$routeParams',
        function ($scope,$routeParams) {
            'use strict';

	        $scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();

	        /**
	         * autoRefreshDataNotif
	         */
	        var refreshDataNotif = function(){
		        rdv.getNotifications().success(function(data){
			        if($scope.userInfo === null){
				        return;
			        }
			        $scope.notifications = $filter('filterNotification')(data,$scope.userInfo.id);
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
