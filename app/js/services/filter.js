angular.module('myApp.services')
	.service('filter', [
		function() {
			'use strict';

			this.isExpired = function(rdv,now){
				return (rdv.end < now);
			};

			this.isLive = function(rdv,now){
				return (rdv.end > now && rdv.start < now + (5*60));
			};

			this.hasTagSelected = function(rdv,aTags){

				var tagItemString = '';
				for(var keyTagItem in rdv.tags){
					tagItemString = tagItemString+' '+rdv.tags[keyTagItem].nom.toLowerCase();
				}

				var asTag = true;
				for(var keyTag in aTags){
					if(tagItemString.indexOf(aTags[keyTag].toLowerCase()) < 0){
						asTag = false;
						break;
					}
				}

				return asTag;
			};

			this.hasPlateformSelected = function(rdv,plateformId){
				var bHasPlateform = true;
				if(plateformId !== "" && typeof(plateformId) !== 'undefined' && plateformId !== null){
					if(rdv.plateform === null || rdv.plateform.id !== plateformId){
						bHasPlateform = false;
					}
				}

				return bHasPlateform;
			};

			this.getCurrentTimestampInSeconds = function(){
				return new Date().getTime()/1000;
			};

			this.tagsStringToArray = function(tags){
				var aTags = [];
				if(typeof tags === "string" && tags !== ""){
					aTags = tags.split(' ');
				}
				return aTags;
			};

			this.hasPlaceAvailable = function(rdv,placesAvailableMini,placeAvailableMax){

				if(!rdv.users){
					return true;
				}

				return (rdv.nbParticipant - rdv.users.length >= placesAvailableMini && rdv.nbParticipant - rdv.users.length <= placeAvailableMax);
			};

			this.hasType = function(rdv,type){
				if(type === 'type_all'){
					return true;
				} else if(type === 'type_annonce' && rdv.type === type){
					return true;
				} else if(type === 'type_party' && rdv.type !== 'type_annonce'){
					return true;
				}

				return false;
			};

			this.byPlateformsAndTags = function(items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,nbPlaceAvailableMin,nbPlaceAvailableMax,type){
				var aFilteredItems = [];

				var aTags = this.tagsStringToArray(tags);

				var now = this.getCurrentTimestampInSeconds();

				for(var key in items){

					if(this.hasPlateformSelected(items[key],plateformId) === false){
						continue;
					}

					if(onlyWithPlace === true && this.hasPlaceAvailable(items[key],nbPlaceAvailableMin,nbPlaceAvailableMax) === false){
						continue;
					}

					if(onlyLive === true && this.isLive(items[key],now) === false){
						continue;
					}

					if(onlyInFuture === true && (this.isExpired(items[key],now) === true || this.isLive(items[key],now) === true)){
						continue;
					}

					if (aTags.length !== 0 && this.hasTagSelected(items[key], aTags) === false) {
						continue;
					}

					if(this.hasType(items[key],type) === false){
						continue;
					}

					aFilteredItems.push(items[key]);
				}

				return aFilteredItems;
			};

			this.hasMeInGame = function(rdv,userId){

				for(var key in rdv.users){
					if(rdv.users[key].user.id === userId){
						return true;
					}
				}

				for(var key_2 in rdv.usersInQueue){
					if(rdv.usersInQueue[key_2].user.id === userId){
						return true;
					}
				}
				return false;
			};

			this.byPlateformsAndTagsWithMe = function(items,currentUserId,plateformId,tags,nbPlaceAvailableMin,nbPlaceAvailableMax){
				var aFilteredItems = [];

				var aTags = this.tagsStringToArray(tags);

				var now = this.getCurrentTimestampInSeconds();

				for(var key in items){

					if(this.hasMeInGame(items[key],currentUserId) === false){
						continue;
					}

					if(plateformId !== null && this.hasPlateformSelected(items[key],plateformId) === false){
						continue;
					}

					if(this.isExpired(items[key],now) === true){
						continue;
					}

					if (aTags.length !== 0 && this.hasTagSelected(items[key], aTags) === false) {
						continue;
					}

					aFilteredItems.push(items[key]);
				}

				return aFilteredItems;
			};
		}
	]
);
