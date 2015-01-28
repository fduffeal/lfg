angular.module('myApp.services')
	.service('forum', ['api','$window','user',
		function(api,$window,user) {
			'use strict';

			this.getAllTopic = function(){
				return api.call('forum');
			};

			this.getTopic = function(id,page,nbResult){
				return api.call('forum/topic/'+id+'/'+page+'/'+nbResult);
			};

			this.reply = function(id,texte,page,nbResult){
				var currentUser = user.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);

				texte = texte.replace(/\n/g,'<br/>');
				//texte = $window.encodeURI(texte);
				var data = {texte:texte};
				return api.post('forum/topic/message/'+id+'/'+page+'/'+nbResult+'/'+username+'/'+token,data);
			};

			this.updateMessage = function(id,texte,page,nbResult){
				var currentUser = user.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);

				texte = texte.replace(/\n/g,'<br/>');
				//texte = $window.encodeURI(texte);
				var data = {texte:texte};
				return api.post('forum/topic/message/update/'+id+'/'+page+'/'+nbResult+'/'+username+'/'+token,data);
			};

			this.deleteMessage = function(id,page,nbResult){
				var currentUser = user.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);

				return api.call('forum/topic/message/delete/'+id+'/'+page+'/'+nbResult+'/'+username+'/'+token);
			};

			this.logout = function(){
				//email = $window.encodeURIComponent(email);
				//password = $window.encodeURIComponent(password);
				//username = $window.encodeURIComponent(username);
				//plateformId = $window.encodeURIComponent(plateformId);
				//gamertag = $window.encodeURIComponent(gamertag);
			};
		}
	]
);
