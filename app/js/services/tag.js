angular.module('myApp.services')
	.service('tag', ['rdv',
		function(rdv) {
			'use strict';
			/**
			 * @desc autoCompleteUserTags retourne les tags utilisateurs complétés des autres tags disponibles
			 * @param aTags tags utilisateurs
			 */
			this.autoCompleteUserTags = function(aTags,allTags){


				var previousTags = '';
				var aPreviousTags = [];
				for(var i = 0; i < aTags.length -1; i++){
					previousTags =  previousTags+aTags[i]+' ';
					aPreviousTags.push(aTags[i]);
				}

				var autocompleteTag = [];
				for(var key in allTags){

					if(aPreviousTags.indexOf(allTags[key].nom) > -1){
						continue;
					}
					autocompleteTag.push(previousTags +allTags[key].nom);
				}

				return autocompleteTag;


			};

		}
	]
);