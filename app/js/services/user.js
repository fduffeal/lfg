angular.module('myApp.services')
	.service('user', ['$http','storage','api','$rootScope','$q','$timeout','$window','socket',
		function($http,storage,api,$rootScope,$q,$timeout,$window,socket) {
			'use strict';
            this.data = '';

			this.fakePromise = function(){
				var deferred = $q.defer();
				var promise = deferred.promise;

				$timeout(function(){
					deferred.resolve();
				},0);

				return promise;
			};

			var storeUser = function(data){
				data.ttl = new Date(new Date().getTime()+ 2*60*60*1000).getTime();
				storage.setPersistant('user',JSON.stringify(data));
				socket.addUser(data.username);
			};

			this.log = function(username,password){
				username = $window.encodeURIComponent(username);
				return api.call('login/'+username+'/'+password).success(function(data){
					storeUser(data);
				});
			};

			this.logByToken = function(username,token){
				username = $window.encodeURIComponent(username);
				return api.call('login/token/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.refreshBungie = function(username,token){

				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}

				var params = {
					username : currentUser.username,
					token : currentUser.token
				};
				return api.post('login/refresh',params).success(function(data){
					storeUser(data);
				});
			};

			this.logByForgetToken = function(username,token){
				username = $window.encodeURIComponent(username);
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

			this.register = function(email,password,username,plateformId,gamertag){

				email = $window.encodeURIComponent(email);
				password = $window.encodeURIComponent(password);
				username = $window.encodeURIComponent(username);
				plateformId = $window.encodeURIComponent(plateformId);
				gamertag = $window.encodeURIComponent(gamertag);
				return api.call('register/'+email+'/'+password+'/'+username+'/'+plateformId+'/'+gamertag).success(function(data){
					storeUser(data);
				});
			};

			this.logout = function(){
				$rootScope.notificationsAlreadyRead = [];
				$rootScope.userGameSelected = null;
				storage.erasePersistant('user');
				socket.disconnect();
			};

			this.createUserGame = function(plateformId,gameId,profilName,gameUsername,data1,data2,data3,data4){

				plateformId = $window.encodeURIComponent(plateformId);
				gameId = $window.encodeURIComponent(gameId);
				profilName = $window.encodeURIComponent(profilName);
				gameUsername = $window.encodeURIComponent(gameUsername);
				data1 = $window.encodeURIComponent(data1);
				data2 = $window.encodeURIComponent(data2);
				data3 = $window.encodeURIComponent(data3);
				data4 = $window.encodeURIComponent(data4);

				var currentUser = this.get();
				var username = $window.encodeURIComponent(currentUser.username);

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

				return api.call('game_data/create/'+plateformId+'/'+gameId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.updateUserGame = function(plateformId,gameId,profilId,profilName,gameUsername,data1,data2,data3,data4){

				plateformId = $window.encodeURIComponent(plateformId);
				gameId = $window.encodeURIComponent(gameId);
				profilId = $window.encodeURIComponent(profilId);
				profilName = $window.encodeURIComponent(profilName);
				gameUsername = $window.encodeURIComponent(gameUsername);
				data1 = $window.encodeURIComponent(data1);
				data2 = $window.encodeURIComponent(data2);
				data3 = $window.encodeURIComponent(data3);
				data4 = $window.encodeURIComponent(data4);

				var currentUser = this.get();
				var username = $window.encodeURIComponent(currentUser.username);

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

				return api.call('game_data/update/'+plateformId+'/'+gameId+'/'+profilId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.forgetPassword = function(email){
				return api.call('forget_password/'+email);
			};

			this.updatePassword = function(password){
				var currentUser = this.get();
				var username = $window.encodeURIComponent(currentUser.username);
				return api.call('update_password/'+password+'/'+username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.updateOnline = function(currentUser){
				var username = $window.encodeURIComponent(currentUser.username);
				return api.call('login/online/'+username+'/'+currentUser.token);
			};

			this.refresh = function(){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				return api.call('login/online/'+username+'/'+token).success(function(data){
					storeUser(data);
				});
			};

			this.getAll = function(){
				return api.call('users/');
			};

			this.getByPage = function(page,nbResult){
				return api.call('users/page/'+page+'/'+nbResult);
			};

			this.getByPlateform = function(plateformId,page,nbResult){
				return api.call('users/plateform/'+plateformId+'/'+page+'/'+nbResult);
			};

			this.getByUsername = function(username,plateformId,page,nbResult){
				username = $window.encodeURIComponent(username);
				return api.call('users/search/'+username+'/'+plateformId+'/'+page+'/'+nbResult);
			};

			this.getFriends = function(){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				return api.call('user/friend/get/'+username+'/'+token);
			};

			this.addFriend = function(friendUsername){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				friendUsername = $window.encodeURIComponent(friendUsername);
				return api.call('user/friend/add/'+friendUsername+'/'+username+'/'+token);
			};

			this.removeFriend = function(friendUsername){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				var username = $window.encodeURIComponent(currentUser.username);
				var token = $window.encodeURIComponent(currentUser.token);
				friendUsername = $window.encodeURIComponent(friendUsername);
				return api.call('user/friend/remove/'+friendUsername+'/'+username+'/'+token);
			};

			/**
			 * les utilisateurs à qui j'ai demandé d'être amis
			 * @returns {*}
			 */
			this.getFriendsRequest = function(){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				return api.call('user/friend/request/'+currentUser.id);
			}

			/**
			 * les utilisateurs qui m'ont demandé en amis
			 * @returns {*}
			 */
			this.getFriendsPending = function(){
				var currentUser = this.get();
				if(currentUser === null){
					return false;
				}
				return api.call('user/friend/request/pending/'+currentUser.id);
			}
		}
	]
);
