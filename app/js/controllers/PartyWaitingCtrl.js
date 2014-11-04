angular.module('myApp.controllers').controller('PartyWaitingCtrl',
    ['$scope','rdv','$routeParams',
        function ($scope,rdv,$routeParams) {
            'use strict';

	        console.log($routeParams.partyId);
	        rdv.get($routeParams.partyId).success(function(data){
		        $scope.rdv = data;
	        });

        }
    ]
);
