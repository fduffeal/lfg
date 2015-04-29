angular.module('myApp.controllers').controller('ProfileCtrl',
    ['$scope','user','rdv','$routeParams','redirection','lang','avis',
        function ($scope,user,rdv,$routeParams,redirection,lang,avis) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

	        $scope.submit = function(){
		      console.log($scope.avis);
		        avis.post(1,$scope.avis);
	        };
        }
    ]
);
