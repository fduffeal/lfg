angular.module('myApp.controllers').controller('LoginCtrl',
    ['$scope','user','$location',
        function ($scope,user,$location) {

	        $scope.login = function(){
		        user.log($scope.username,$scope.password).success(function(data){
			        $scope.userInfo = data;
			        $location.path('/');
		        })
	        };

        }
    ]
);
