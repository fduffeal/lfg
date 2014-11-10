angular.module('myApp.services')
	.service('rdv', ['$http','user','$q','$timeout',
		function($http,user,$q,$timeout) {
			'use strict';
			this.getAll = function(){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/');
			};

			this.getFormInfoData = null;
			this.getFormInfo = function(){
				var parent = this;
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/form_info').success(function(data){
					parent.getFormInfoData = data;
				});
			};

            this.add = function(plateform,game,tags,description,start,duree,nbParticipant){
                var currentUser = user.get();
                return $http.get('http://dev.esbattle.com/app_dev.php/rdv/add/'+plateform+'/'+game+'/'+tags+'/'+description+'/'+start+'/'+duree+'/'+nbParticipant+'/'+currentUser.username+'/'+currentUser.token);
            };

			this.get = function(id){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/get/'+id);
			};

			this.join = function(rdvId,username,token){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/join/'+rdvId+'/'+username+'/'+token);
			};

			this.acceptUser = function(userId,rdvId,username,token){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/accept_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.kickUser = function(userId,rdvId,username,token){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/kick_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.leave = function(rdvId,username,token){
				return $http.get('http://dev.esbattle.com/app_dev.php/rdv/leave/'+rdvId+'/'+username+'/'+token);
			};
		}
	]
);
