angular.module('myApp.services')
	.service('rdv', ['$http','user','api',
		function($http,user,api) {
			'use strict';
			this.getAll = function(){
				return api.call('rdv/');
			};

			this.getFormInfoData = null;
			this.getFormInfo = function(){
				var parent = this;
				return api.call('rdv/form_info').success(function(data){
					parent.getFormInfoData = data;
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
