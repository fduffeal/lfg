angular.module('myApp.services')
	.service('lang', ['gettextCatalog','$routeParams','$rootScope','$location',
		function(gettextCatalog,$routeParams,$rootScope,$location) {
			'use strict';

			this.initLang = function(){
				gettextCatalog.debug = true;

				if($routeParams.lang){
					this.updateLang($routeParams.lang);
				}else {
					this.updateLang('fr');
				}
			};

			this.getCurrent = function(){
				this.initLang();
				return $rootScope.lang;
			};

			this.updateLang = function(newLang){
				$rootScope.lang = newLang;
				gettextCatalog.setCurrentLanguage(newLang);// Corresponds au header 'Language' du fichier .po;
			};
		}
	]
);
