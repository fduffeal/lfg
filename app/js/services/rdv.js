angular.module('myApp.services')
	.service('rdv', ['$http',
		function($http) {
			this.getAll = function(){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/');
			};

            this.add = function(name,description,start,end,nbParticipant){
                return $http.get('http://dev.esbattle.com/app_dev.php/rdv/add/'+name+'/'+description+'/'+start+'/'+end+'/'+nbParticipant);
            };
		}
	]
);
