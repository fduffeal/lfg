/**
 * Ce service permet de gérer les stockage de données
 *
 * dans cet ordre de priorité
 * soit en localStorage et sessionStorage si disponible
 * soit avec une fonction propre au device
 * soit en cookie
 */
'use strict';
angular.module('myApp.services').service('storage',['$rootScope','$cookies',
	function($rootScope,$cookies){

		this.createCookie = function(name,value,days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}
			document.cookie = name+"="+value+expires+"; path=/";
		};

		this.eraseCookie = function(name) {
			document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		};

		this.erasePersistant = function(name) {

			if(localStorage !== null){
				localStorage[name] = null;
			} else {
				document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
			}
		};

		this.getPersistant = function(name){

			if(localStorage !== null){
				return localStorage[name];
			}
			var data = $cookies[name];
			return data;
		};

		this.setPersistant = function(name,value){

			if(localStorage !== null){
				localStorage[name]=value;
				return;
			}
			this.createCookie(name,value,360);
		};
	}
]);

