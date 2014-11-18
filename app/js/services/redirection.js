angular.module('myApp.services')
	.service('redirection', ['$location','$rootScope','$window',
		function($location,$rootScope,$window) {
			'use strict';
			var getLang = function(){
				if($rootScope.lang === undefined){
					return 'fr';
				}
				return $rootScope.lang;
			};

			this.getLoginPageUrl = function(){
				return getLang()+'/login';
			};

			this.goToLogin = function(){
				$location.path(this.getLoginPageUrl());
			};

			this.getRegisterPageUrl = function(){
				return getLang()+'/register';
			};

			this.goToRegister = function(){
				$location.path(this.getRegisterPageUrl());
			};

			this.getCreatePartyPageUrl = function(){
				return getLang()+'/party/create';
			};

			this.goCreateParty = function(){
				$location.path(this.getCreatePartyPageUrl());
			};

			this.goBack = function(){
				$window.history.back();
			};

			this.getPartyWaitingUrlRoot = function(){
				return getLang()+'/party/waiting/';
			};

			this.getPartyWaitingByIdUrl = function(id){
				return this.getPartyWaitingUrlRoot()+id;
			};

			this.goToRdvId = function(id){
				$location.path(this.getPartyWaitingByIdUrl(id));
			};

			this.getHomePageUrl = function(){
				return getLang()+'/';
			};

			this.goHome = function(id){
				$location.path(this.getHomePageUrl());
			};

			this.getNotFoundPageUrl = function(msg){
				return getLang()+'/404/'+msg;
			};

			this.goWelcomeHome = function(){
				$location.path(getLang()+'/welcome');
			};

			this.notFound = function(msg){
				$location.path(this.getNotFoundPage(msg));
			};

			this.getProfilGamePageUrl = function(gameId,plateformId){
				return getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.getProfilGamePageByGameAndPlateformUrl = function(gameId,plateformId){
				return getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.goToCreateProfilForGameAndPlateform = function(gameId,plateformId){
				$location.path(this.getProfilGamePageByGameAndPlateformUrl(gameId,plateformId));
			};
		}
	]
);
