angular.module('myApp.controllers').controller('RegisterCtrl',
    ['$scope','user','$location',
        function ($scope,user,$location) {

	        $scope.updateRegExpPassword = function(){
		        $scope.regExpPassword = '/'+$scope.password+'/';
	        }

	        $scope.submit = function(){
		        user.register($scope.email,$scope.password,$scope.username).success(function(data){
			        $location.path('/welcome');
		        });
	        }

        }
    ]
);
