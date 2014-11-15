angular.module('myApp.services')
	.service('user', ['$http','storage','api',
		function($http,storage,api) {
			'use strict';
            this.data = '';

			var storeUser = function(data){
				data.ttl = new Date(new Date().getTime()+ 2*60*60*1000).getTime();
				storage.setPersistant('user',JSON.stringify(data));
			};

			this.log = function(username,password){
				return api.call('login/'+username+'/'+password).success(function(data){
					storeUser(data);
				});
			};

			this.logByToken = function(username,token){
				return api.call('login/token/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.logByForgetToken = function(username,token){
				return api.call('login/forgetToken/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.get = function(){
				var courantUser = storage.getPersistant('user');
				if(typeof(courantUser) !== "undefined"){
					var user = JSON.parse(courantUser);
					if(user !== null && user.ttl < new Date().getTime()){
						this.logout();
						this.logByToken(user.username,user.token).then(function(data){
							user = data;
						});
					}
					return user;
				}
				return null;
			};

			this.register = function(email,password,username){

				return api.call('register/'+email+'/'+password+'/'+username).success(function(data){
					storeUser(data);
				});
			};

			this.logout = function(){
				storage.erasePersistant('user');
			};

			this.setUserGame = function(plateformId,gameId,profilName,gameUsername,data1,data2,data3,data4){

				var currentUser = this.get();

				if(typeof data1 === "undefined" || data1 === ""){
					data1='null';
				}
				if(typeof data2 === "undefined" || data2 === ""){
					data2='null';
				}
				if(typeof data3 === "undefined" || data3 === ""){
					data3='null';
				}
				if(typeof data4 === "undefined" || data4 === ""){
					data4='null';
				}

				return api.call('game_data/update/'+plateformId+'/'+gameId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+currentUser.username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.forgetPassword = function(email){
				return api.call('forget_password/'+email);
			};

			this.updatePassword = function(password){
				var currentUser = this.get();
				return api.call('update_password/'+password+'/'+currentUser.username+'/'+currentUser.token);
			};
		}
	]
);
