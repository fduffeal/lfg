angular.module('myApp.services')
	.service('meta', ['$rootScope',
		function($rootScope) {
			'use strict';
			$rootScope.description = 'EsBattle.com est votre site de recherche de joueurs pour Destiny. Vous cherchez des joueurs pour le raid ? Sur www.esbattle.com vous pouvez créer une partie ou en rejoindre une rapidement ! Créez un profil de jeu et demander à rejoindre une partie !',
			this.getDescription = function(){
				return  $rootScope.description;
			}

			this.setDescription = function(newDesc){
				$rootScope.description = newDesc;
			}
		}
	]
);
