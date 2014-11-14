angular.module('myApp.services')
	.service('activity', ['$rootScope','$window',
		function($rootScope,$window) {
			'use strict';

			var sendInactivityAfer = 10 * 60 * 1000;
			var timeoutInactivity = null;
			this.setEvent = function(){
				$window.onfocus = function(){
					$rootScope.activityOnWindow = true;
				};

				$window.onblur = function (){
					$rootScope.activityOnWindow = false;
				};
			};

			this.isActiveWindow = function(){
				return $rootScope.activityOnWindow;
			};
		}
	]
);
