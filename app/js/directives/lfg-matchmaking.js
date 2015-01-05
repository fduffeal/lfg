angular.module('myApp.directives')
    .directive('lfgMatchmaking', ['matchmaking','user','redirection','$filter',
        function(matchmaking,user,redirection,$filter) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'='
                },
                link: function($scope, element, attrs) {

	                $scope.matchmakingTemplate = null;

	                /**
	                 * récupère les configs pour la selection du type de matchmaking
	                 */
	                matchmaking.getConf().success(function(data){

		                var groupOfTemplate = {};
		                for(var key in data){
			                if(!groupOfTemplate[data[key].description]) {
				                groupOfTemplate[data[key].description] = [];
			                }
			                data[key].concatTags = "";
			                for(var keyTag in data[key].tags){
				                data[key].concatTags += "#"+data[key].tags[keyTag].nom+" ";
			                }
			                groupOfTemplate[data[key].description].push(data[key]);
		                }
		                $scope.groupOfTemplate = groupOfTemplate;
	                });

	                /**
	                 * selectionne un type de matchmaking
	                 * @param template
	                 */
	                $scope.selectGroupOfTemplate = function(template){
		                $scope.matchmakingTemplate = template;
		                $scope.templateSelectedModel = template[0];
	                };

	                $scope.$watch('templateSelectedModel',function(newValue,oldValue){
		               console.log('templateSelectedModel',newValue);
		                $scope.$emit('templateSelectedModel',[newValue]);
	                });

                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-matchmaking.html'
            };
        }
    ]
);
