angular.module('myApp.services')
	.service('socket', ['$rootScope',
		function($rootScope) {
			'use strict';
			this.currentSocket = null;
			this.listUsers = {};

			this.on = function(event,callback){
				var socket = this.getCurrentSocket();
				socket.on(event, function (data) {
					console.log('event global',data);
					callback();
				});
			};

			this.initListener = function(socket){

				var that = this;
				// Whenever the server emits 'new message', update the chat body
				socket.on('new message', function (data) {
					console.log('new message',data);
				});

				// Whenever the server emits 'user joined', log it in the chat body
				socket.on('user joined', function (data) {
					console.log('user join',data);
					that.listUsers = data.listUsers;
					$rootScope.$broadcast('updateListUsers',[data.listUsers]);
				});

				// Whenever the server emits 'user left', log it in the chat body
				socket.on('user left', function (data) {
					console.log('user left',data);
					that.listUsers = data.listUsers;
					$rootScope.$broadcast('updateListUsers',[data.listUsers]);
				});

				// Whenever the server emits 'users list', log it in the chat body
				socket.on('users list', function (data) {
					console.log('users list',data);
					that.listUsers = data.listUsers;
					$rootScope.$broadcast('updateListUsers',[data.listUsers]);
				});

				// Whenever the server emits 'typing', show the typing message
				socket.on('typing', function (data) {
					console.log('typing',data);
				});

				// Whenever the server emits 'stop typing', kill the typing message
				socket.on('stop typing', function (data) {
					console.log('stop typing',data);
				});
			};

			this.getCurrentSocket = function(){
				this.initSocket();
				return this.currentSocket;
			};

			this.initSocket = function(){
				if(this.currentSocket === null && typeof(io) !== "undefined"){
					this.currentSocket = io.connect('http://www.esbattle.com:3000');
					this.initListener(this.currentSocket);
				}
			};

			this.addUser = function(username){
				var socket = this.getCurrentSocket();
				socket.emit('add user', username);
			};

			this.disconnect = function(){
				var socket = this.getCurrentSocket();
				socket.close();
				//socket.emit('disconnect');
			};

			this.getUserList = function(){
				var socket = this.getCurrentSocket();
				console.log('emit : ask users list');
				socket.emit('ask users list');
			};
		}
	]
);