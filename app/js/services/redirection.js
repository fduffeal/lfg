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

			this.getPartenaireByIdUrlRoot = function(){
				return '/'+getLang()+'/video/';
			};

			this.getPartenaireByIdUrl = function(partenaire){

				/* Remove unwanted characters, only accept alphanumeric and space */
				var titre = partenaire.nom.replace(/[^A-Za-z0-9 ]/g,'');

				/* Replace multi spaces with a single space */
				titre = titre.replace(/\s{2,}/g,' ');

				/* Replace space with a '-' symbol */
				titre = titre.replace(/\s/g, "-");

				return this.getPartenaireByIdUrlRoot()+partenaire.id+'/'+titre;
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

			this.getHomePageDestinyUrl = function(){
				return '/'+getLang()+'/destiny/';
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
				return '/'+getLang()+'/users/connected';
			};

			this.getAnnonceCreateUrl = function(){
				return '/'+getLang()+'/annonce/create/';
			};

			this.getForumUrl = function(){
				return '/'+getLang()+'/forum/';
			};

			this.getTopicUrl = function(topic,page){

				if(!page){
					page = 1;
				}

				/* Remove unwanted characters, only accept alphanumeric and space */
				var titre = topic.titre.replace(/[^A-Za-z0-9 ]/g,'');

				/* Replace multi spaces with a single space */
				titre = titre.replace(/\s{2,}/g,' ');

				/* Replace space with a '-' symbol */
				titre = titre.replace(/\s/g, "-");

				return '/'+getLang()+'/forum/topic/'+topic.id+'/'+page+'/'+titre;
			};

			this.getVideoUrl = function(){
				return '/'+getLang()+'/destiny/video/all';
			}
		}
	]
);
