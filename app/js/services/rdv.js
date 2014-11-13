angular.module('myApp.services')
	.service('rdv', ['$http','user','api','superCache',
		function($http,user,api,superCache) {
			'use strict';
			this.getAll = function(){
				return api.call('rdv/');
			};

			this.getFormInfo = function(){
				var cache = superCache.promise('getFormInfo');
				if(cache !== false){
					return cache;
				}
				return api.call('rdv/form_info').success(function(data){
					superCache.put('getFormInfo',data);
				}).then(function(promise){
					return promise.data;
				});
			};

            this.add = function(plateform,game,tags,description,start,duree,nbParticipant,profilId){
                var currentUser = user.get();
                return api.call('rdv/add/'+plateform+'/'+game+'/'+tags+'/'+description+'/'+start+'/'+duree+'/'+nbParticipant+'/'+profilId+'/'+currentUser.username+'/'+currentUser.token);
            };

			this.get = function(id){
				return api.call('rdv/get/'+id);
			};

			this.join = function(rdvId,userGameId,username,token){
				return api.call('rdv/join/'+rdvId+'/'+userGameId+'/'+username+'/'+token);
			};

			this.acceptUser = function(userId,rdvId,username,token){
				return api.call('rdv/accept_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.kickUser = function(userId,rdvId,username,token){
				return api.call('rdv/kick_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.leave = function(rdvId,userId,username,token){
				return api.call('rdv/leave/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};
		}
	]
);
