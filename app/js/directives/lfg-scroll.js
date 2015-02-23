angular.module('myApp.directives')
    .directive('lfgScroll', ['tools','$timeout',
        function(tools,$timeout) {
            'use strict';
            return {
                link: function($scope, elm, attrs) {

	                elm.on('mousewheel',function(event){
		                if(event.deltaY > 0){
			                $scope.$emit('scroll',[-1]);
			                $scope.$apply();
		                }else {
			                $scope.$emit('scroll',[1]);
			                $scope.$apply();
		                }
		                event.preventDefault();
	                });

	                elm.on('touchmove',function(event){
		                event.preventDefault();
	                });

	                var toucheYStart = 0;
	                elm.on('touchstart',function(event){
		                toucheYStart = event.changedTouches[0].clientY;
	                });

	                elm.on('touchend',function(event){

		                var diffY = event.changedTouches[0].clientY - toucheYStart;

		                if(diffY < 0){
			                $scope.$emit('scroll',[1]);
			                $scope.$emit('scroll',[1]);
			                $scope.$emit('scroll',[1]);
			                $scope.$apply();
		                } else {
			                $scope.$emit('scroll',[-1]);
			                $scope.$emit('scroll',[-1]);
			                $scope.$emit('scroll',[-1]);
			                $scope.$apply();
		                }

	                });
                },
                restrict: 'A',
	            replace : false
            };
        }
    ]
);
