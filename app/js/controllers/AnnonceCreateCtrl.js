angular.module('myApp.controllers').controller('AnnonceCreateCtrl',
	['$scope','rdv','$location','$filter','user','$rootScope','redirection','lang',
		function ($scope,rdv,$location,$filter,user,$rootScope,redirection,lang) {
			'use strict';

			$scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

		}
	]
);
