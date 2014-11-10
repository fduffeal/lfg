angular.module('myApp.services')
	.service('user', ['$http','storage',
		function($http,storage) {
			'use strict';
            this.data = '';
			this.log = function(email,password){
				return $http.get('http://dev.esbattle.com/app_dev.php/login/'+email+'/'+password).success(function(data){
					storage.setPersistant('user',JSON.stringify(data));
				});
			};

			this.get = function(){
				var courantUser = storage.getPersistant('user');
				if(typeof(courantUser) !== "undefined"){
					return JSON.parse(courantUser);
				}
				return null;
			};

			this.register = function(email,password,username){

				return $http.get('http://dev.esbattle.com/app_dev.php/register/'+email+'/'+password+'/'+username).success(function(data){
					storage.setPersistant('user',JSON.stringify(data));
				});
			};

			this.logout = function(){
				storage.erasePersistant('user');
			};

			this.setUserGame = function(plateformId,gameId,profilName,data1,data2,data3,data4){

				var currentUser = this.get();

				if(typeof data1 === "undefined"){
					data1='null';
				}
				if(typeof data2 === "undefined"){
					data2='null';
				}
				if(typeof data3 === "undefined"){
					data3='null';
				}
				if(typeof data4 === "undefined"){
					data4='null';
				}

				return $http.get('http://dev.esbattle.com/app_dev.php/game_data/update/'+plateformId+'/'+gameId+'/'+profilName+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+currentUser.username+'/'+currentUser.token).success(function(data){
					storage.setPersistant('user',JSON.stringify(data));
				});
			};
		}
	]
);
