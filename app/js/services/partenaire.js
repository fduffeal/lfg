angular.module('myApp.services')
	.service('partenaire', ['api',
		function(api) {
			'use strict';

			this.getAll = function(){
				return api.call('partenaire');
			};

			this.getById = function(id){
				return api.call('partenaire/'+id);
			};
		}
	]
);
