angular.module('myApp.services')
	.service('redirection', ['$location','$rootScope','$window',
		function($location,$rootScope,$window) {
			'use strict';

			var getLang = function(){
				if($rootScope.lang === undefined){
					return '/fr';
				}
				return $rootScope.lang;
			};

			this.goToLogin = function(){
				$location.path(getLang()+'/login');
			};

			this.goToRegister = function(){
				$location.path(getLang()+'/register');
			};

			this.goCreateParty = function(){
				$location.path(getLang()+'/party/create');
			};

			this.goBack = function(){
				$window.history.back();
			};

			this.goToRdvId = function(id){
				$location.path(getLang()+'/party/waiting/'+id);
			};

			this.goHome = function(id){
				$location.path(getLang()+'/');
			};

			this.notFound = function(msg){
				$location.path(getLang()+'/404/'+msg);
			};

			this.goToCreateProfilForGameAndPlateform = function(gameId,plateformId){
				$location.path(getLang()+'/profile/'+gameId+'/'+plateformId);
			};
		}
	]
);
