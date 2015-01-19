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
				return '/'+getLang()+'/login';
			};

			this.goToLogin = function(){
				$location.path(this.getLoginPageUrl());
			};

			this.getRegisterPageUrl = function(){
				return '/'+getLang()+'/register';
			};
			this.getNotifPageUrl = function(){
				return '/'+getLang()+'/notification';
			};
			this.getMatchmakingPageUrl = function(){
				return '/'+getLang()+'/matchmaking';
			};
			this.getGamesPageUrl = function(){
				return '/'+getLang()+'/games';
			};

			this.goToGamesPage = function(){
				$location.path(this.getGamesPageUrl());
			};

			this.goToRegister = function(){
				$location.path(this.getRegisterPageUrl());
			};

			this.getCreatePartyPageUrl = function(){
				return '/'+getLang()+'/party/create';
			};

			this.goCreateParty = function(){
				$location.path(this.getCreatePartyPageUrl());
			};

			this.goBack = function(){
				$window.history.back();
			};

			this.getPartyWaitingUrlRoot = function(){
				return '/'+getLang()+'/party/waiting/';
			};

			this.getPartyWaitingByIdUrl = function(id){
				return this.getPartyWaitingUrlRoot()+id;
			};

			this.goToRdvId = function(id){
				$location.path(this.getPartyWaitingByIdUrl(id));
			};

			this.goToMatchmakingId = function(id){
				$location.path('/'+getLang()+'/matchmaking/waiting/'+id);
			};

			this.getHomePageUrl = function(){
				return '/'+getLang()+'/';
			};

			this.goHome = function(id){
				$location.path(this.getHomePageUrl());
			};

			this.getNotFoundPageUrl = function(msg){
				return '/'+getLang()+'/404/'+msg;
			};

			this.goWelcomeHome = function(){
				$location.path('/'+getLang()+'/welcome');
			};

			this.notFound = function(msg){
				$location.path(this.getNotFoundPageUrl(msg));
			};

			this.getProfilGamePageUrl = function(gameId,plateformId){
				return '/'+getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.getProfilGamePageByGameAndPlateformUrl = function(gameId,plateformId){
				return '/'+getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.goToCreateProfilForGameAndPlateform = function(gameId,plateformId){
				this.goToGamesPage();
			};

			this.getListUsersUrl = function(){
				return '/'+getLang()+'/users/connected/';
			};

			this.getAnnonceCreateUrl = function(){
				return '/'+getLang()+'/annonce/create/';
			};
		}
	]
);
