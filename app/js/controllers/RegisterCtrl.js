angular.module('myApp.controllers').controller('RegisterCtrl',
    ['$scope','user','$location','lang','redirection',
        function ($scope,user,$location,lang,redirection) {

	        $scope.lang = lang.getCurrent();

	        $scope.updateRegExpPassword = function(){
		        $scope.regExpPassword = '/'+$scope.password+'/';
	        }

	        $scope.submit = function(){
		        user.register($scope.email,$scope.password,$scope.username).success(function(data){
			        redirection.goWelcomeHome();
		        });
	        }

        }
    ]
);
