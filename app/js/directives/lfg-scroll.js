angular.module('myApp.directives')
    .directive('lfgScroll', ['tools','$timeout',
        function(tools,$timeout) {
            'use strict';
            return {
                link: function($scope, elm, attrs) {

	                var scrollUp = function(){
		                $scope.$emit('scroll',[-1]);
		                $scope.$apply();
	                }

	                var scrollDown = function(){
		                $scope.$emit('scroll',[1]);
		                $scope.$apply();
	                }

	                elm.on('mousewheel',function(event){
		                if(event.deltaY > 0){
			                scrollUp();
		                }else {
			                scrollDown();
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
			                scrollDown();
			                $scope.$apply();
		                } else {
			                scrollUp();
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
