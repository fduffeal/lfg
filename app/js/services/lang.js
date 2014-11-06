angular.module('myApp.services')
	.service('lang', ['gettextCatalog','$routeParams','$rootScope',
		function(gettextCatalog,$routeParams,$rootScope) {
			'use strict';

			this.setLang = function(){
				gettextCatalog.debug = true;

				if($routeParams.lang){
					$rootScope.lang = '/'+$routeParams.lang;
					gettextCatalog.setCurrentLanguage($routeParams.lang); // Corresponds au header 'Language' du fichier .po;
				}else {
					$rootScope.lang = '/fr';
					gettextCatalog.setCurrentLanguage('fr'); // Corresponds au header 'Language' du fichier .po;
				}
			};

			this.change = function(newLang){
				$rootScope.lang = '/'+newLang;
				gettextCatalog.setCurrentLanguage(newLang);
			};
		}
	]
);
