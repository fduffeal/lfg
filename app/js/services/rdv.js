angular.module('myApp.services')
	.service('rdv', ['$http','user','api','superCache','$window',
		function($http,user,api,superCache,$window) {
			'use strict';
			this.getAll = function(){
				return api.call('rdv/');
			};

			this.getByPlateform = function(plateformId){
				return api.call('rdv/byPlateform/'+plateformId);
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

            this.add = function(plateform,game,tags,description,start,duree,nbParticipant,profilId,vignetteId){
                var currentUser = user.get();

	            plateform = $window.encodeURIComponent(plateform);
	            game = $window.encodeURIComponent(game);
	            tags = $window.encodeURIComponent(tags);
	            description = $window.encodeURIComponent(description);
	            start = $window.encodeURIComponent(start);
	            duree = $window.encodeURIComponent(duree);
	            nbParticipant = $window.encodeURIComponent(nbParticipant);
	            profilId = $window.encodeURIComponent(profilId);
	            vignetteId = $window.encodeURIComponent(vignetteId);
	            var username = $window.encodeURIComponent(currentUser.username);

	            return api.call('rdv/add/'+plateform+'/'+game+'/'+tags+'/'+description+'/'+start+'/'+duree+'/'+nbParticipant+'/'+profilId+'/'+vignetteId+'/'+username+'/'+currentUser.token);
            };

			this.get = function(id){
				return api.call('rdv/get/'+id);
			};

			this.join = function(rdvId,userGameId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/join/'+rdvId+'/'+userGameId+'/'+username+'/'+token);
			};

			this.acceptUser = function(userId,rdvId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/accept_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.kickUser = function(userId,rdvId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/kick_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.leave = function(rdvId,userId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/leave/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};

			this.promote = function(rdvId,userId,username,token){
				username = $window.encodeURIComponent(username);
				return api.call('rdv/promote/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};

			this.getNotifications = function(){

				var currentUser = user.get();
				if(currentUser === null) {
					return false;
				}

				return api.call('notifications/'+currentUser.id);
			};
			this.getAllNotifications = function(){

				var currentUser = user.get();
				if(currentUser === null) {
					return false;
				}

				return api.call('notifications/all/'+currentUser.id);
			};

			this.markNotificationRead = function(ids){

				var currentUser = user.get();
				if(currentUser === null) {
					return false;
				}

				return api.call('notifications/read/'+currentUser.id+'/'+ids);
			};

			this.isLive = function(rdv){
				var now = new Date();
				now = now.getTime()/1000;
				return (typeof rdv !== "undefined" && rdv.start < now && rdv.end > now);
			};

			this.isEnded = function(rdv){
				var now = new Date();
				now = now.getTime()/1000;
				return (typeof rdv !== "undefined" && rdv.end < now);
			};

			this.invite = function(destinataire,rdv){

				var currentUser = user.get();
				if(currentUser === null) {
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				return api.call('rdv/invite/'+destinataire.id+'/'+rdv.id+'/'+username+'/'+token);
			};
		}
	]
);
