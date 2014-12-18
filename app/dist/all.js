'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.services',
	'myApp.directives',
	'myApp.filters',
	'ngCookies',
	'gettext',
	'superCache'
]).
	config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/:lang/matchmaking',
			{
				templateUrl: 'html/controllers/matchmaking.html',
				controller : 'MatchmakingCtrl'
			});

		$routeProvider.when('/:lang/',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller : 'RdvCtrl'
			});
		$routeProvider.when('/:lang/party/create',
			{
				templateUrl: 'html/controllers/party-create.html',
				controller : 'PartyCreateCtrl'
			});
		$routeProvider.when('/:lang/party/waiting/:partyId',
			{
				templateUrl: 'html/controllers/party-waiting.html',
				controller : 'PartyWaitingCtrl'
			});
		$routeProvider.when('/:lang/matchmaking/waiting/:partyId',
			{
				templateUrl: 'html/controllers/matchmaking-waiting.html',
				controller : 'MatchmakingWaitingCtrl'
			});
		$routeProvider.when('/:lang/register',
			{
				templateUrl: 'html/controllers/register.html',
				controller : 'RegisterCtrl'
			});
		$routeProvider.when('/:lang/login',
			{
				templateUrl: 'html/controllers/login.html',
				controller : 'LoginCtrl'
			});
		$routeProvider.when('/:lang/profile/',
			{
				templateUrl: 'html/controllers/profile.html',
				controller : 'ProfileCtrl'
			});

		$routeProvider.when('/:lang/profile/:gameId/:plateformId/',
			{
				templateUrl: 'html/controllers/profile.html',
				controller : 'ProfileCtrl'
			});

		$routeProvider.when('/:lang/welcome',
			{
				templateUrl: 'html/controllers/rdv.html',
				controller : 'RdvCtrl',
				action     : 'welcome'
			});
		$routeProvider.when('/:lang/games',
			{
				templateUrl: 'html/controllers/games-profiles.html',
				controller : 'GamesProfilesCtrl',
				action     : 'games'
			});

		$routeProvider.when('/:lang/404/:msg?',
			{
				templateUrl: 'html/controllers/404.html',
				controller : '404Ctrl'
			});
		$routeProvider.when('/:lang/notification',
			{
				templateUrl: 'html/controllers/notification.html',
				controller : 'NotificationCtrl'
			});

		$routeProvider.when('/:lang/password/forget/:username/:forgetToken',
			{
				templateUrl: 'html/controllers/password-update.html',
				controller : 'PasswordUpdateCtrl',
				action     : 'forget'
			});

		$routeProvider.when('/:lang/password/update',
			{
				templateUrl: 'html/controllers/password-update.html',
				controller : 'PasswordUpdateCtrl',
				action     : 'update'
			});

		$routeProvider.otherwise({redirectTo: '/fr'});

	}]);

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);

angular.module('myApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('fr', {"<span>IMPORTANT :</span>After creating the party, it will be possible to invit/promote some players or cancel the party. However, after two players in the party, it will unfortunately not be possible to cancel the party! If you leave the party, the second player will be promoted as the creator of the party. Please check your information before creating!":"<span>IMPORTANT :</span>Après avoir créé la partie, il sera possible d'inviter des joueur, d'annuler la partie mais pas de la modifier. Cependant, lorsque deux joueurs sont confirmés dans la partie, il n'est plus possible d'annuler la partie. Si vous quittez la partie, le second joueur sera promu en tant que créateur. Donc merci de vérifier vos informations avant de créer une partie !","A new player joined":"Un nouveau joueur a rejoint","A player leave":"Un joueur a quitté","ALL":"TOUS","ALL FIELDS ARE REQUIRED":"TOUS LES CHAMPS DOIVENT ETRE REMPLIS","Accept":"Accepter","Actions":"Actions","Appointment not found":"Rendez vous non trouvé","Are you sure to kick :":"Êtes-vous sûr de vouloir kicker:","Back":"Retour","Bad Username or Password.":"Mauvais nom d'utilisateur ou mot de passe.","Class":"Class","Confirm Password":"Confirmez votre mot de passe","Create Party":"Creer une partie","Create a profil for this game and join !":"Créer un profil pour ce jeu et rejoignez !","Create a profile for this game and join !":"Créer un profil pour ce jeu et rejoignez !","Decline":"Refuser","Description":"Description","Email":"Adresse email","Email Address":"Adresse email","Ended":"Terminé","English":"Anglais","Enter your login and password":"Entrez votre login et mot de passe","Esbattle username":"Compte Esbattle","Forget login or password ?":"Mot de passe oublié ?","French":"Français","Game":"Jeu","Game Infos for {{game.name}}":"Infos de jeux pour {{game.name}}","Game Profil":"Profil de jeux","Gamertag":"Gamertag","Games Profiles":"Vos personnages","Home":"Accueil","If you leave this page, the matchmaking will be cancel":"Si vous quittez cette page, le matchmaking sera annulé","Join !":"Rejoindre !","Kick":"Rejeter","Leave":"Quitter","Level":"Niveau","Login":"Connexion","Login !":"Connexion !","Logout":"Déconnexion","Mail already send. Please check your mailBox (and your spam box)":"Email déjà envoyé. Merci de vérifier votre boite email (et votre dossier spam)","Mail send. Please check your mailBox (and your spam box)":"Email envoyé. Merci de vérifier votre boite email (et votre dossier spam)","Matchmaking":"Matchmaking","New party on":"Nouvelle partie sur","New profile":"Nouveau profil:","No":"Non","Notification":"Notification","Notifications":"Notifications","OR":"OU","Open":"Ouvert","Password":"Mot de passe","Password Forgotten ?":"Mot de passe oublié ?","Password Updated !":"Mot de passe mis à jour !","Passwords doesn't match":"Les mots de passe ne correspondent pas","Personal Infos":"Informations personelles","Platform":"Platformes","Please waiting, we are looking for players...":"Merci de patienter, nous recherchons des joueurs...","Profil Name":"Nom du profil","Promote":"Nommer chef de groupe","Register":"Inscription","Register !":"Inscription !","Register with your email address":"S'enregistrer avec votre adresse email","Retrieve my account !":"Récupérer mon compte !","Slots":"Slots","Sorry, you have been kicked by":"Désolé, vous avez été exclu par","Start":"Début","Team":"Equipe","The Party":"Partie en attente de joueurs...","The username is already used.":"Ce nom d'utilisateur est déjà pris","This email is already used.":"Cet email est déjà pris","This party is ended, create a new party !":"Cette partie est terminée, créez une nouvelle partie !","Tomorrow":"Demain","Update":"Mettre à jour","Update Password":"Mettre à jour le mot de passe","Update my password !":"Mettre à jour mon mot de passe !","Username":"Nom d'utilisateur","Username on this game":"Nom d'utilisateur sur ce jeu","Waiting Players":"Joueurs voulant rejoindre la partie","When":"Quand:","Yes":"Oui","You have been accepted by":"Vous avez été accepté par","You have been promoted as leader by":"Vous avez été promu comme chef par","Your games profiles":"Vos profils de jeux","from":"de","has leave. You lead":"a quitté. Vous contrôlez ","on":"sur","password doesn't match":"Les mots de passe ne correspondent pas","this party":"cette partie","with profil :":"avec le profil :","Class:":"Class","Create a profile":"Nouveau profil","Gamertag:":"Gamertag:","Platform:":"Plateforme:","Profile:":"Profil:","Create":"Créer","Account":"Compte","&copy; Copyright 2014 esbattle.com all rights reserved":"&copy; Copyright 2014 esbattle.com Tous droits réservés","Create a\r\n                            profil for this game and join !":"Créer un profil pour ce jeu et rejoignez !","Congratulation ! You are now registered on esBattle.com! Do not forget to put your infos game in your":"Bravo ! Vous êtes désormais enregistré sur esBattle.com! N'oubliez pas de mettre vos informations de jeux à jour dans ","For":"Durée","HOME":"ACCUEIL","ID in game":"ID dans le jeu","NEW PARTY":"NOUVELLE PARTIE","Platforms":"Platformes","Tags":"Tags","The website is still in beta mode, so please report your bugs/ideas to contact.esbattle@gmail.com :)":"Le site web est en beta, merci de reporter vos bugs/idées directement à contact.esbattle@gmail.com :)","slots available min":"Places dispo minimum","Confirm your password":"Confirmez votre mdp","Start the":"Démarre le","Till :":"Jusqu'à :","Class (titan/hunter, arcanist)":"Class (titan/chasseur, arcanist)","Level (please keep update)":"Niveau (merci de le mettre à jour)","PLATFORMS":"PLATFORMES","slots available max":"Places disponible max","Duration: for":"Durée:"});
/* jshint +W100 */
}]);
angular.module('myApp.controllers').controller('404Ctrl',
	['$scope','$routeParams',
		function ($scope,$routeParams) {
			'use strict';
			$scope.msg = $routeParams.msg;
			console.log($scope.msg);
		}
	]
);

angular.module('myApp.controllers').controller('GamesProfilesCtrl',
    ['$scope','user','rdv','$routeParams','redirection','lang',
        function ($scope,user,rdv,$routeParams,redirection,lang) {
            'use strict';
	        $scope.lang = lang.getCurrent();

	        $scope.currentUser = user.get();
			$scope.aProfils = [];
			if($scope.currentUser !== null){
				$scope.aProfils = $scope.currentUser.userGame;
			}


	        rdv.getFormInfo().then(function(data){
		        $scope.plateforms = data.plateforms;
		        $scope.games = data.games;
		        $scope.plateform = $scope.plateforms[0];
		        $scope.game = $scope.games[0];
	        });


	        $scope.submitFormGameInfo = function(){
		        if($scope.formGameProfil.$valid === false){
			        return;
		        }
		        $scope.formGameInfoUpdate = false;

				if(typeof $scope.profilId  === "undefined" || $scope.profilId  === ""){
					user.createUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data_1,$scope.data_2,$scope.data_3,$scope.data_4).success(function(data){
						$scope.aProfils = data.userGame;
						$scope.formGameInfoUpdate = true;
						$scope.$broadcast('refreshProfil');
					});
				}else {
					user.updateUserGame($scope.plateform.id,$scope.game.id,$scope.profilId,$scope.profilName,$scope.gameUsername,$scope.data_1,$scope.data_2,$scope.data_3,$scope.data_4).success(function(data){
						$scope.aProfils = data.userGame;
						$scope.formGameInfoUpdate = true;
						$scope.$broadcast('refreshProfil');
					});
				}
	        };

			$scope.selectProfil = function(profil){

				$scope.profilId = (profil!==null) ? profil.id : '';
				$scope.profilName = (profil!==null) ? profil.gameProfilName : '';
				$scope.gameUsername = (profil!==null) ? profil.gameUsername : '';
				$scope.data_1 = (profil!==null) ? profil.data1 : '';
				$scope.data_2 = (profil!==null) ? parseInt(profil.data2) : '';
				$scope.data_3 = (profil!==null) ? profil.data3 : '';
				$scope.data_4 = (profil!==null) ? profil.data4 : '';

				if(profil !== null){
					for(var keyP in $scope.plateforms){
						if($scope.plateforms[keyP].id == profil.plateform.id){
							$scope.plateform = $scope.plateforms[keyP];
						}
					}

					for(var keyG in $scope.games){
						if($scope.games[keyG].id == profil.game.id){
							$scope.game = $scope.games[keyG];
						}
					}
				}

			};
        }
    ]
);

angular.module('myApp.controllers').controller('LoginCtrl',
    ['$scope','user','redirection','lang',
        function ($scope,user,redirection,lang) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.registerPageUrl = redirection.getRegisterPageUrl();

			var tentative = 0;
			var maxTentative = 2;
			$scope.bDisplayForgetPasswordForm = false;
			$scope.bDisplayForgetPasswordFormMailSend = false;

			$scope.displayForgetPasswordForm = function(){
				$scope.bDisplayForgetPasswordForm = true;
			};

	        $scope.login = function(){
		        if($scope.loginForm.$valid === false){
			        return;
		        }

		        user.log($scope.username,$scope.password).success(function(data){
			        $scope.userInfo = data;
					redirection.goBack();
			        $scope.$broadcast('refreshProfil');
		        }).error(function(data){
					$scope.error = data.msg;
					if(data.msg==='connection_refused'){
						tentative++;

						if(tentative > maxTentative){
							$scope.displayForgetPasswordForm();
						}
					}
				});
	        };

			$scope.forgetPassword = function(){
				user.forgetPassword($scope.email).success(function(data){
					$scope.bDisplayForgetPasswordFormMailSend = true;

				}).error(function(data){
					$scope.errorForgetPassword = data.msg;
				});
			};

        }
    ]
);

angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope','matchmaking','user','redirection','$filter',
		function ($scope,matchmaking,user,redirection,$filter) {
			'use strict';

			$scope.currentUser = user.get();
			$scope.matchmakingTemplate = null;
			$scope.profilSelected = null;

			var updateProfilsAvailable = function(){
				if($scope.currentUser !== null && $scope.game !== null){
					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,null,null);
					if($scope.profils[0] && $scope.profilSelected === null){
						$scope.profilSelected = $scope.profils[0];
					}
				}
			};

			updateProfilsAvailable();

			/**
			 * récupère les configs pour la selection du type de matchmaking
			 */
			matchmaking.getConf().success(function(data){

				var groupOfTemplate = {};
				for(var key in data){
					if(!groupOfTemplate[data[key].description]) {
						groupOfTemplate[data[key].description] = [];
					}
					data[key].concatTags = "";
					for(var keyTag in data[key].tags){
						data[key].concatTags += "#"+data[key].tags[keyTag].nom+" ";
					}
					groupOfTemplate[data[key].description].push(data[key]);
				}
				$scope.groupOfTemplate = groupOfTemplate;
			});

			/**
			 * lance le matchmaking
			 */
			$scope.join = function(){
				if($scope.joinMatchmakingForm.$valid === false){
					return;
				}
				matchmaking.join($scope.templateSelectedModel.id,$scope.profilSelected.id).success(function(data){
					redirection.goToMatchmakingId(data.id);
				});
			};

			/**
			 * selectionne un type de matchmaking
			 * @param template
			 */
			$scope.selectGroupOfTemplate = function(template){
				$scope.matchmakingTemplate = template;
				$scope.templateSelectedModel = template[0];
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};
		}
	]
);

angular.module('myApp.controllers').controller('MatchmakingWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location','$filter','redirection','$interval','activity','lang',
        function ($scope,rdv,$routeParams,user,$location,$filter,redirection,$interval,activity,lang) {
            'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			var manageAutorisation = function(){
				$scope.isLeader = false;
				$scope.canJoin = true;
				$scope.imOnGroup = false;

				if ($scope.currentUser !== null) {

					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame, $scope.rdv.game.id, $scope.rdv.plateform.id);

					if ($scope.profils[0]) {
						$scope.profilSelected = $scope.profils[0];
					}

					if ($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username) {
						$scope.isLeader = true;
					}

					for (var key in $scope.rdv.users) {
						if ($scope.rdv.users[key].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}

					for (var key2 in $scope.rdv.usersInQueue) {
						if ($scope.rdv.usersInQueue[key2].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
						}
					}
				} else {
					$scope.canJoin = false;
				}
			};

	        var getRdvDetails = function(){
		        rdv.get($routeParams.partyId).success(function (data) {
			        $scope.rdv = data;

			        $scope.isFull = (data.users.length === data.nbParticipant);
			        manageAutorisation();
		        });
	        };

	        var refreshData = function() {
		        if($scope.currentUser !== null){
			        user.updateOnline($scope.currentUser).success(function(data){
				        getRdvDetails();
			        });
		        } else {
			        getRdvDetails();
		        }
	        };

	        $scope.leave = function(userId){
				stopAutoRefreshData();
		        rdv.leave($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
					autoRefreshData();
		        });
	        };

			$scope.currentUrl = $location.absUrl();


			var refreshTime = 12000;
			var autoRefreshData = function(){
				stopAutoRefreshData();
				$scope.intervalId = $interval(function(){
					refreshData();
				}, refreshTime);
			};

			var stopAutoRefreshData = function(){
				$interval.cancel($scope.intervalId);
			};

			refreshData();
			autoRefreshData();

        }
    ]
);

angular.module('myApp.controllers').controller('NotificationCtrl',
    ['$scope','$routeParams','redirection','rdv','$filter','user','$interval','$rootScope',
        function ($scope,$routeParams,redirection,rdv,$filter,user,$interval,$rootScope) {
            'use strict';

	        $scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();

	        $scope.userInfo = user.get();
	        /**
	         * autoRefreshDataNotif
	         */
	        var refreshDataNotif = function(){
		        rdv.getNotifications().success(function(data){
			        if($scope.userInfo === null){
				        return;
			        }
			        $scope.notifications = $filter('filterNotification')(data,$scope.userInfo.id);
			        $rootScope.notificationsAlreadyRead = $scope.notifications;
		        });
	        };

	        var refreshTime = 12000;
	        var autoRefreshDataNotif = function(){
		        $interval.cancel($scope.intervaNotificationId);

		        if (angular.isDefined($scope.intervaNotificationId)) {
			        return;
		        }

		        $scope.intervaNotificationId = $interval(function(){
			        refreshDataNotif();
		        }, refreshTime);
	        };

	        refreshDataNotif();
	        autoRefreshDataNotif();
        }
    ]
);

angular.module('myApp.controllers').controller('PartyCreateCtrl',
	['$scope','rdv','$location','$filter','user','$rootScope','redirection','lang',
		function ($scope,rdv,$location,$filter,user,$rootScope,redirection,lang) {
			'use strict';

			$scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			if($scope.currentUser === null){
				redirection.goToLogin();
				return;
			}

			$scope.dureeHours = 1;
			$scope.dureeMinutes = 0;

			$scope.game = null;
			$scope.plateform = null;

			rdv.getFormInfo().then(function(data){
				$scope.formInfo = data;
				$scope.game = $scope.formInfo.games[0];
			});

			$scope.today = new Date();

			$scope.day = new Date($scope.today.getFullYear(), $scope.today.getMonth(), $scope.today.getDate(), $scope.today.getHours(), $scope.today.getMinutes()+5,$scope.today.getSeconds());

			$scope.startHours = $scope.today.getHours();
			$scope.startMinutes = $scope.today.getMinutes();

			$scope.dayPlusTwo = new Date();
			$scope.dayPlusTwo.setTime($scope.dayPlusTwo.getTime() + 2 * 24 * 3600 * 1000);

			$scope.$watch('game',function(newValue,oldValue){
				updateProfilsAvailable();
			});

			$scope.$watch('profilSelected',function(newValue,oldValue){
				if(typeof newValue !== "undefined" ){
					$scope.updatePlateform(newValue.plateform);
				}
			});

			var updateProfilsAvailable = function(){
				if($scope.currentUser !== null && $scope.game !== null){
					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.game.id,null);
					if($scope.profils[0]){
						$scope.profilSelected = $scope.profils[0];
					}
				}

			};

			var updateTime = function(){
				var rdvDate = new Date();
				var now = new Date();
				rdvDate.setHours($scope.startHours);
				rdvDate.setMinutes($scope.startMinutes);

				$scope.bDemain = false;
				if(now.getTime() > rdvDate.getTime()){
					rdvDate.setTime(rdvDate.getTime() + 1 * 24 * 3600 * 1000);
					$scope.bDemain = true;
				}

				$scope.day = rdvDate;
			} ;

			$scope.$watch('startMinutes',function(newValue,OldValue){
				updateTime();
			});

			$scope.$watch('startHours',function(newValue,OldValue){
				updateTime();
			});

            $scope.submit = function(){

	            if($scope.myForm.$valid === false){
		            return;
	            }
                var game = $scope.game.id;
                var day = $scope.myForm.inputDayStart.$modelValue.getTime()/1000;
                var dureeHours = $scope.dureeHours;
                var dureeMinutes = $scope.dureeMinutes;
                var plateform = $scope.plateform.id;
                var tags = $scope.tags;
                var description = $scope.description;
                var slotTotal = $scope.slotTotal;
				var profilId = $scope.profilSelected.id

                rdv.add(plateform,game,tags,description,day,dureeHours+':'+dureeMinutes,slotTotal,profilId).success(function(data){
					redirection.goToRdvId(data.id);
                });
            };

			$scope.updatePlateform = function(plateform){
				$scope.plateform = plateform;
			};

			$scope.autocomplete = function(){
				var aTags = $scope.tags.split(' ');

				var previousTags = '';
				var aPreviousTags = [];
				for(var i = 0; i < aTags.length -1; i++){
					previousTags =  previousTags+aTags[i]+' ';
					aPreviousTags.push(aTags[i]);
				}

				$scope.autocompleteTag = [];
				for(var key in $scope.formInfo.tags){

					if(aPreviousTags.indexOf($scope.formInfo.tags[key].nom) > -1){
						continue;
					}
					$scope.autocompleteTag.push(previousTags +$scope.formInfo.tags[key].nom);
				}
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};

		}
	]
);

angular.module('myApp.controllers').controller('PartyWaitingCtrl',
    ['$scope','rdv','$routeParams','user','$location','$filter','redirection','$interval','activity','lang',
        function ($scope,rdv,$routeParams,user,$location,$filter,redirection,$interval,activity,lang) {
            'use strict';

	        $scope.lang = lang.getCurrent();

	        $scope.partyCreateUrl = redirection.getCreatePartyPageUrl();

			$scope.currentUser = user.get();

	        $scope.profilSelected = null;

			var manageAutorisation = function(){
				$scope.isLeader = false;
				$scope.canJoin = true;
				$scope.imOnGroup = false;

				if ($scope.currentUser !== null) {

					$scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame, $scope.rdv.game.id, $scope.rdv.plateform.id);

					if ($scope.rdv.leader && $scope.rdv.leader.username === $scope.currentUser.username) {
						$scope.isLeader = true;
					}

					for (var key in $scope.rdv.users) {
						if ($scope.rdv.users[key].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
							$scope.imOnGroup = true;
						}
					}

					for (var key2 in $scope.rdv.usersInQueue) {
						if ($scope.rdv.usersInQueue[key2].user.username === $scope.currentUser.username) {
							$scope.canJoin = false;
						}
					}
				} else {
					$scope.canJoin = false;
				}
			};

	        var getRdvDetails = function(){
		        rdv.get($routeParams.partyId).success(function (data) {
			        $scope.rdv = data;

			        $scope.isFull = (data.users.length === data.nbParticipant);

			        $scope.isEnded = rdv.isEnded($scope.rdv);
			        $scope.isLive = rdv.isLive($scope.rdv);

			        updateProfilsAvailable();

			        manageAutorisation();
		        });
	        };

	        var refreshData = function() {
		        if($scope.currentUser !== null){
			        user.updateOnline($scope.currentUser).success(function(data){
				        getRdvDetails();
			        });
		        } else {
			        getRdvDetails();
		        }
	        };

			$scope.join = function(){
				if($scope.currentUser === null){
//@todo rediriger vers la page connexion / register
					return;
				}
				stopAutoRefreshData();

				rdv.join($scope.rdv.id,$scope.profilSelected.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.acceptUser = function(userId){
				stopAutoRefreshData();
				rdv.acceptUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.kickUser = function(userId){
				stopAutoRefreshData();
				rdv.kickUser(userId,$scope.rdv.id,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};


	        $scope.leave = function(userId){
				stopAutoRefreshData();
		        rdv.leave($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
			        $scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
		        });
	        };

			$scope.promote = function(userId){
				stopAutoRefreshData();
				rdv.promote($scope.rdv.id,userId,$scope.currentUser.username,$scope.currentUser.token).success(function(data){
					$scope.rdv = data;
					manageAutorisation();
					autoRefreshData();
				});
			};

			$scope.createProfil = function(){
				redirection.goToGamesPage();
			};

			$scope.currentUrl = $location.absUrl();


			var refreshTime = 12000;
			var autoRefreshData = function(){
				stopAutoRefreshData();
				$scope.intervalId = $interval(function(){
					refreshData();
				}, refreshTime);
			};

			var stopAutoRefreshData = function(){
				$interval.cancel($scope.intervalId);
			};

	        var updateProfilsAvailable = function(){
		        if($scope.currentUser !== null && $scope.rdv !== null && $scope.rdv.game !== null && $scope.rdv.plateform !== null){
			        $scope.profils = $filter('filterGameProfil')($scope.currentUser.userGame,$scope.rdv.game.id,$scope.rdv.plateform.id);
			        if($scope.profils[0] && $scope.profilSelected === null){
				        $scope.profilSelected = $scope.profils[0];
			        }
		        }
	        };

			refreshData();
			autoRefreshData();

        }
    ]
);

angular.module('myApp.controllers').controller('PasswordUpdateCtrl',
    ['$scope','user','$route','$routeParams',
        function ($scope,user,$route,$routeParams) {
			'use strict';

			if($route.current.action === 'forget'){
				user.logByForgetToken($routeParams.username,$routeParams.forgetToken).error(function(data){
					$scope.error = data.msg;
				});
			}

			$scope.bDisplayUpdatePassword = false;

			$scope.updatePassword = function(){

				if($scope.password !== $scope.passwordVerif){
					$scope.error = 'password_not_equal';
				} else {
					user.updatePassword($scope.password).success(function(data){
						$scope.bDisplayUpdatePassword = true;
					}).error(function(data){
						$scope.error = data.msg;
					});
				}



			};

        }
    ]
);

angular.module('myApp.controllers').controller('ProfileCtrl',
    ['$scope','user','rdv','$routeParams','redirection','lang',
        function ($scope,user,rdv,$routeParams,redirection,lang) {
			'use strict';

	        $scope.lang = lang.getCurrent();

			$scope.currentUser = user.get();

			rdv.getFormInfo().then(function(data){
				$scope.plateforms = data.plateforms;
				$scope.games = data.games;

				$scope.plateform = data.plateforms[0];
				if($routeParams.plateformId){
					for(var key in data.plateforms){
						if(data.plateforms[key].id == $routeParams.plateformId){
							$scope.plateform = data.plateforms[key];
						}
					}
				}

				$scope.game = data.games[0];
				if($routeParams.gameId){
					for(var key in data.games){
						if(data.games[key].id == $routeParams.gameId){
							$scope.game = data.games[key];
						}
					}
				}

				$scope.updateFormData();

			});


			$scope.submitFormGameInfo = function(){
				if($scope.gameInfo.$valid === false){
					return;
				}
				$scope.formGameInfoUpdate = false;
				user.setUserGame($scope.plateform.id,$scope.game.id,$scope.profilName,$scope.gameUsername,$scope.data1,$scope.data2,$scope.data3,$scope.data4).success(function(data){
					$scope.formGameInfoUpdate = true;
				});
			};

			$scope.updateFormData = function(){
				$scope.formGameInfoUpdate = false;
				$scope.profilName = '';
				$scope.gameUsername = '';
				$scope.data1 = '';
				$scope.data2 = '';
				$scope.data3 = '';
				$scope.data4 = '';
				for(var key in $scope.currentUser.userGame){
					if($scope.currentUser.userGame[key].plateform.id === $scope.plateform.id){
						$scope.profilName = $scope.currentUser.userGame[key].gameProfilName;
						$scope.gameUsername = $scope.currentUser.userGame[key].gameUsername;
						$scope.data2 = $scope.currentUser.userGame[key].data2;
						$scope.data3 = $scope.currentUser.userGame[key].data3;
						$scope.data4 = $scope.currentUser.userGame[key].data4;
						$scope.data1 = $scope.currentUser.userGame[key].data1;
					}
				}
			};

			$scope.goBack = function(){
				redirection.goBack();
			};

        }
    ]
);

angular.module('myApp.controllers').controller('RdvCtrl',
	['$scope','rdv','redirection','$route','tag','lang','$interval','user',
		function ($scope,rdv,redirection,$route,tag,lang,$interval,user) {
			'use strict';

			lang.initLang();

			$scope.currentUser = user.get();

			$scope.predicate = 'start';
			$scope.reverse = true;

			$scope.now = new Date();

			$scope.demain = new Date();
			$scope.demain.setTime($scope.demain.getTime() + 24 * 3600 * 1000);

			$scope.slotMinAvailable = 0;
			$scope.slotMaxAvailable = 6;

			$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();

			$scope.isLive = rdv.isLive;
			$scope.isEnded = rdv.isEnded;

			$scope.goToParty = function(id){
				redirection.goToRdvId(id);
			};


			$scope.updateTags = function(){
				var aTags = $scope.tags.split(' ');
				$scope.autoCompleteTags = tag.autoCompleteUserTags(aTags,$scope.allTags);

			};

			$scope.autoCompleteTags = [];

			$scope.allTags = [];

			rdv.getFormInfo().then(function(data){
				$scope.allTags = data.tags;
				$scope.autoCompleteTags = tag.autoCompleteUserTags([],$scope.allTags);
				$scope.aPlateforms = data.plateforms;
			});


			var refreshRdvData = function(){
				rdv.getAll().success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					$scope.aRdv = data;
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			};

			$scope.plateformSelected = '';
			$scope.plateformNameSelected = 'ALL';
			$scope.updatePlateform = function(id,nom){
				$scope.plateformSelected = id;
				$scope.plateformNameSelected = nom;
			};

			$scope.displayWelcome = ($route.current.action === 'welcome');

			//autoRefresh
			var refreshTime = 12000;
			var autoRefreshData = function(){
				$scope.intervalId = $interval(function(){
					refreshRdvData();
				}, refreshTime);
			};

			//init
			refreshRdvData();
			autoRefreshData();
		}
	]
);

angular.module('myApp.controllers').controller('RegisterCtrl',
    ['$scope','user','$location','lang','redirection',
        function ($scope,user,$location,lang,redirection) {

	        $scope.lang = lang.getCurrent();

	        $scope.updateRegExpPassword = function(){
		        $scope.regExpPassword = '/'+$scope.password+'/';
	        };

	        $scope.checkPassword = function(){
		        $scope.errorPassword = false;
		        if($scope.password !== $scope.passwordverif){
			        $scope.errorPassword = true;
			        return;
		        }
	        };

	        $scope.submit = function(){


		        if($scope.registerForm.$valid === false ||  $scope.errorPassword === true){
			        return;
		        }

				$scope.username_already_taken = false;
				$scope.email_already_taken = false;
		        user.register($scope.email,$scope.password,$scope.username).success(function(data){
			        redirection.goWelcomeHome();
		        }).error(function(data){
					console.log('error',data);
					$scope.aError = data;

					if(data.aError) {

						for (var key in data.aError) {

							console.log(data.aError[key]);
							if (data.aError[key] === 'username_already_taken') {
								$scope.username_already_taken = true;
							}

							if (data.aError[key] === 'email_already_taken') {
								$scope.email_already_taken = true;
							}
						}
					}
				});
	        };

        }
    ]
);

angular.module('myApp.directives')
	.directive('lfgFacebook', ['$window','$document',
		function($window,$document) {
			'use strict';
			return {
				link : function(){

					window.fbAsyncInit = function() {
						FB.init({
							appId      : '1482107158698739',
							xfbml      : true,
							version    : 'v2.0'
						});
					};

					(function(d, s, id){
						var js, fjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) {return;}
						js = d.createElement(s); js.id = id;
						js.src = "//connect.facebook.net/fr_FR/sdk.js";
						fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-facebook.html'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgFooter', ['lang','$location',
		function(lang,$location) {
			return {
				link: function($scope, element, attrs) {
					lang.initLang();
					$scope.lang = lang.getCurrent();

					$scope.updateLang = function(langSelected){
						lang.change(langSelected);
						$scope.lang = langSelected;
					};

					var switchLangUrl = function(newLang){
						return $location.absUrl().replace($scope.lang,newLang);
					};

					$scope.switchLangUrlFr = switchLangUrl('fr');
					$scope.switchLangUrlEn = switchLangUrl('en');

				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-footer.html'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgHeader', ['user','rdv','tag','lang','redirection','$interval','$filter',
		function(user,rdv,tag,lang,redirection,$interval,$filter) {
			'use strict';
			return {
				scope:{
					'lfgHeader':'='
				},
				link: function($scope, element, attrs) {
					lang.initLang();
					$scope.lang = lang.getCurrent();

					$scope.logout = function(){
						user.logout();
						$scope.userInfo = null;
						redirection.goHome();
					};




					$scope.homeUrl = redirection.getHomePageUrl();
					$scope.partyCreateUrl = redirection.getCreatePartyPageUrl();
					$scope.profilGameUrl = redirection.getProfilGamePageUrl();
					$scope.loginPageUrl = redirection.getLoginPageUrl();
					$scope.registerPageUrl = redirection.getRegisterPageUrl();
					$scope.partyWaitingUrlRoot = redirection.getPartyWaitingUrlRoot();
					$scope.gamesUrl = redirection.getGamesPageUrl();
					$scope.notifUrl = redirection.getNotifPageUrl();
					$scope.matchmakingUrl = redirection.getMatchmakingPageUrl();

                    $scope.userInfo = user.get();


					/**
					 * autoRefreshDataNotif
					 */
					var refreshDataNotif = function(){
						rdv.getNotifications().success(function(data){
							if($scope.userInfo === null){
								return;
							}
							$scope.notifications = [];
							$scope.allMyNotifications = $filter('filterNotification')(data,$scope.userInfo.id);
							for(var key in $scope.allMyNotifications){
								if($scope.allMyNotifications[key].unread === true){
									$scope.notifications.push($scope.allMyNotifications[key]);
								}
							}
						});
					};

					var refreshTime = 12000;
					var autoRefreshDataNotif = function(){
						$interval.cancel($scope.intervaNotificationId);

						if (angular.isDefined($scope.intervaNotificationId)) {
							return;
						}

						$scope.intervaNotificationId = $interval(function(){
							refreshDataNotif();
						}, refreshTime);
					};

					refreshDataNotif();
					autoRefreshDataNotif();

				},
				restrict: 'E',
				templateUrl: 'html/directives/lfg-header.html'
			};
		}
	]
);

angular.module('myApp.directives')
	.directive('lfgInterval', ["$interval",
		function($interval) {
			'use strict';
			return {
				replace :true,
				scope:{
					'lfgInterval':'='
				},
				link: function($scope, element, attrs) {

					element.on('$destroy', function() {
						$interval.cancel($scope.lfgInterval);
						$scope.lfgInterval = undefined;
					});
				},
				restrict: 'A'
			};
		}
	]
);

angular.module('myApp.directives')
    .directive('lfgProfile', ['user','rdv','tag','lang','redirection','$interval','$rootScope',
        function(user,rdv,tag,lang,redirection,$interval,$rootScope) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'='
                },
                link: function($scope, element, attrs) {

	                $scope.userGameSelected = null;
                    $scope.gamesUrl = redirection.getGamesPageUrl();

					$scope.setUserGame = function(userSelected){
						$scope.userGameSelected = userSelected;
						$rootScope.userGameSelected = userSelected;
						$scope.$emit('setUserGame',[userSelected]);
					};

	                var initProfil = function(){
		                $scope.userInfo = user.get();
		                if(typeof($rootScope.userGameSelected) !== "undefined"){
			                $scope.setUserGame($rootScope.userGameSelected);
		                }	else if($scope.userInfo !== null && $scope.userInfo.userGame[0]){
			                $scope.setUserGame($scope.userInfo.userGame[0]);
		                }
	                };

	                $scope.$on('refreshProfil',function(event,data){
		                $scope.userInfo = user.get();
		                $scope.setUserGame($scope.userInfo.userGame[0]);
	                });

	                initProfil();
                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);

angular.module('myApp.filters').filter('filterCharacters', function () {
	'use strict';
	return function (input, chars, breakOnWord) {
		if (isNaN(chars)) {
			return input;
		}
		if (chars <= 0) {
			return '';
		}
		if (input && input.length > chars) {
			input = input.substring(0, chars);

			if (!breakOnWord) {
				var lastspace = input.lastIndexOf(' ');
				//get last space
				if (lastspace !== -1) {
					input = input.substr(0, lastspace);
				}
			} else {
				while (input.charAt(input.length - 1) === ' ') {
					input = input.substr(0, input.length - 1);
				}
			}
			return input + '...';
		}
		return input;
	};
});
angular.module('myApp.filters').filter('filterGameProfil', [function () {
	'use strict';
	return function (userGameProfil,gameId,plateformId) {
		var aFilterdItems = [];

		for(var key in userGameProfil){
			if(userGameProfil[key].game.id !== gameId && gameId !== null){
				continue;
			}
			if(userGameProfil[key].plateform.id !== plateformId && plateformId !== null){
				continue;
			}
			aFilterdItems.push(userGameProfil[key]);
		}

		return aFilterdItems;
	};
}]);
angular.module('myApp.filters').filter('filterNotification', [
	'filter','user','$rootScope',
	function (filter,user,$rootScope) {
		'use strict';
		return function (items,userId) {

			var aNotifRead = [];
			if($rootScope.notificationsAlreadyRead){
				for(var key in $rootScope.notificationsAlreadyRead){
					aNotifRead.push($rootScope.notificationsAlreadyRead[key].id);
				}
			}

			var aFilteredItems = [];
			if(userId !== null) {
				for (var key in items) {
					if (items[key].destinataire.id === userId) {

						if(aNotifRead.indexOf(items[key].id) === -1){
							items[key].unread = true;
						}
						aFilteredItems.push(items[key]);
					}
				}
			}

			return aFilteredItems;
		};
	}
]);
angular.module('myApp.filters').filter('filterRdv', [function () {
	'use strict';
	return function (items,plateformId,tags) {

		var aFilterdItems = [];

		var aTags = [];
		if(typeof tags === "string" && tags !== ""){
			aTags = tags.split(' ');
		}

		var d = new Date();
		var now = d.getTime()/1000;

		for(var key in items){
			if(plateformId !== ""){
				if(items[key].plateform === null || items[key].plateform.id !== plateformId){
					continue;
				}
			}

			if(items[key].end < now){
				continue;
			}

			if(aTags.length === 0){
				aFilterdItems.push(items[key]);
				continue;
			}

			var aTagItem = [];
			for(var keyTagItem in items[key].tags){
				aTagItem.push(items[key].tags[keyTagItem].nom.toLowerCase());
			}

			var asTag = true;
			for(var keyTag in aTags){
				if(aTagItem.indexOf(aTags[keyTag].toLowerCase()) < 0){
					asTag = false;
				}
			}

			if(asTag === false){
				continue;
			}

			aFilterdItems.push(items[key]);
		}

		return aFilterdItems;
	};
}]);
angular.module('myApp.filters').filter('filterRdvLastPlace', [
	'filter',
	function (filter) {
	'use strict';
	return function (items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,onlyOnePlace,nbPlaceAvailable) {

		return filter.byPlateformsAndTags(items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,onlyOnePlace,nbPlaceAvailable);

	};
}]);
angular.module('myApp.filters').filter('filterRdvWithMe', [
	'filter',
	function (filter) {
	'use strict';
	return function (items,currentUserId,plateformId,tags,onlyOnePlace,nbPlaceAvailable) {

		return filter.byPlateformsAndTagsWithMe(items,currentUserId,plateformId,tags,onlyOnePlace,nbPlaceAvailable);

	};
}]);
angular.module('myApp.filters').filter('filterWords', function () {
	'use strict';
	return function (input, words) {
		if (isNaN(words)) {
			return input;
		}
		if (words <= 0) {
			return '';
		}
		if (input) {
			var inputWords = input.split(/\s+/);
			if (inputWords.length > words) {
				input = inputWords.slice(0, words).join(' ') + '...';
			}
		}
		return input;
	};
});
angular.module('superCache',[])
	.factory('superCache', ['$cacheFactory','$q','$timeout',
		function($cacheFactory,$q,$timeout) {
			'use strict';
			this.customCache = {
				myCache : $cacheFactory('super-cache',{capacity:200}),
				get : function(id){
					return this.myCache.get(id);
				},
				put : function(id,dataToCache){
					this.myCache.put(id,dataToCache);
				},
				removeAll : function(){
					this.myCache.removeAll();
				},
				promise : function(id){
					var cache = this.get(id);
					if(cache && typeof cache === "object"){
						var deferred = $q.defer();
						var promise = deferred.promise;

						$timeout(function(){
							deferred.resolve();
						},0);

						return promise.then(function(response){
							return cache;
						});
					} else {
						return false;
					}
				}
			};
			return this.customCache;
		}
	]
);
// I provide a request-transformation method that is used to prepare the outgoing
// request as a FORM post instead of a JSON packet.
//
angular.module('myApp').factory(
    "transformRequestAsFormPost",
    function () {

        // I prepare the request data for the form post.
        function transformRequest(data, getHeaders) {

            var headers = getHeaders();

            headers["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8";

            return ( serializeData(data) );

        }


        // Return the factory value.
        return ( transformRequest );


        // ---
        // PRVIATE METHODS.
        // ---


        // I serialize the given Object into a key-value pair string. This
        // method expects an object and will default to the toString() method.
        // --
        // NOTE: This is an atered version of the jQuery.param() method which
        // will serialize a data collection for Form posting.
        // --
        // https://github.com/jquery/jquery/blob/master/src/serialize.js#L45
        function serializeData(data) {

            // If this is not an object, defer to native stringification.
            if (!angular.isObject(data)) {

                return ( ( data == null ) ? "" : data.toString() );

            }

            var buffer = [];

            // Serialize each key in the object.
            for (var name in data) {

                if (!data.hasOwnProperty(name)) {

                    continue;

                }

                var value = data[name];

                buffer.push(
                    encodeURIComponent(name) +
                    "=" +
                    encodeURIComponent(( value == null ) ? "" : value)
                );

            }

            // Serialize the buffer and clean it up for transportation.
            var source = buffer
                    .join("&")
                    .replace(/%20/g, "+")
                ;

            return ( source );

        }

    }
);
angular.module('myApp.services')
	.service('activity', ['$rootScope','$window',
		function($rootScope,$window) {
			'use strict';

			var sendInactivityAfer = 10 * 60 * 1000;
			var timeoutInactivity = null;
			this.setEvent = function(){
				$window.onfocus = function(){
					$rootScope.activityOnWindow = true;
				};

				$window.onblur = function (){
					$rootScope.activityOnWindow = false;
				};
			};

			this.isActiveWindow = function(){
				return $rootScope.activityOnWindow;
			};
		}
	]
);

angular.module('myApp.services')
	.service('api', ['$http','storage','redirection','$location',
		function($http,storage,redirection,$location) {
			'use strict';

			this.url = null;
			this.getApiUrl = function(){
				if(this.url !== null){
					return this.url;
				}
				var host = $location.host();
				if(host === 'www.esbattle.com'){
					this.url = 'http://api.esbattle.com/app_dev.php/';
				}else {
					this.url = 'http://lfg.esbattle.com/app_dev.php/';
				}
				return this.url;
			};

			this.call = function(path){
				return $http.get(this.getApiUrl()+path).error(function(data, status, headers, config){

					switch(status){
						case 401 :
							storage.erasePersistant('user');
							redirection.goToLogin();
							break;

						case 403:
							//on ne fait rien, la requete n'est pas authorisée
							break;

						case 308:
							redirection.goHome();
							break;

						case 404:
							redirection.notFound(data.msg);
							break;

						default:
							break;
					}
				});
			};
		}
	]
);

angular.module('myApp.services')
	.service('filter', [
		function() {
			'use strict';

			this.isExpired = function(rdv,now){
				return (rdv.end < now);
			};

			this.isLive = function(rdv,now){
				return (rdv.end > now && rdv.start < now + (5*60));
			};

			this.hasTagSelected = function(rdv,aTags){

				var aTagItem = [];
				for(var keyTagItem in rdv.tags){
					aTagItem.push(rdv.tags[keyTagItem].nom.toLowerCase());
				}

				var asTag = true;
				for(var keyTag in aTags){
					if(aTagItem.indexOf(aTags[keyTag].toLowerCase()) < 0){
						asTag = false;
					}
				}

				return asTag;
			};

			this.hasPlateformSelected = function(rdv,plateformId){
				var bHasPlateform = true;
				if(plateformId !== ""){
					if(rdv.plateform === null || rdv.plateform.id !== plateformId){
						bHasPlateform = false;
					}
				}

				return bHasPlateform;
			};

			this.getCurrentTimestampInSeconds = function(){
				return new Date().getTime()/1000;
			};

			this.tagsStringToArray = function(tags){
				var aTags = [];
				if(typeof tags === "string" && tags !== ""){
					aTags = tags.split(' ');
				}
				return aTags;
			};

			this.hasPlaceAvailable = function(rdv){
				return (rdv.users.length < rdv.nbParticipant);
			};

			this.hasPlaceAvailable = function(rdv,placesAvailableMini,placeAvailableMax){
				return (rdv.nbParticipant - rdv.users.length >= placesAvailableMini && rdv.nbParticipant - rdv.users.length <= placeAvailableMax);
			};

			this.byPlateformsAndTags = function(items,plateformId,tags,onlyLive,onlyInFuture,onlyWithPlace,nbPlaceAvailableMin,nbPlaceAvailableMax){
				var aFilteredItems = [];

				var aTags = this.tagsStringToArray(tags);

				var now = this.getCurrentTimestampInSeconds();

				for(var key in items){

					if(this.hasPlateformSelected(items[key],plateformId) === false){
						continue;
					}

					if(onlyWithPlace === true && this.hasPlaceAvailable(items[key],nbPlaceAvailableMin,nbPlaceAvailableMax) === false){
						continue;
					}

					if(onlyLive === true && this.isLive(items[key],now) === false){
						continue;
					}

					if(onlyInFuture === true && (this.isExpired(items[key],now) === true || this.isLive(items[key],now) === true)){
						continue;
					}

					if (aTags.length !== 0 && this.hasTagSelected(items[key], aTags) === false) {
						continue;
					}

					aFilteredItems.push(items[key]);
				}

				return aFilteredItems;
			};

			this.hasMeInGame = function(rdv,userId){

				for(var key in rdv.users){
					if(rdv.users[key].user.id === userId){
						return true;
					}
				}

				for(var key_2 in rdv.usersInQueue){
					if(rdv.usersInQueue[key_2].user.id === userId){
						return true;
					}
				}
				return false;
			};

			this.byPlateformsAndTagsWithMe = function(items,currentUserId,plateformId,tags,nbPlaceAvailableMin,nbPlaceAvailableMax){
				var aFilteredItems = [];

				var aTags = this.tagsStringToArray(tags);

				var now = this.getCurrentTimestampInSeconds();

				for(var key in items){

					if(this.hasMeInGame(items[key],currentUserId) === false){
						continue;
					}

					if(this.hasPlateformSelected(items[key],plateformId) === false){
						continue;
					}

					if(this.isExpired(items[key],now) === true){
						continue;
					}

					if (aTags.length !== 0 && this.hasTagSelected(items[key], aTags) === false) {
						continue;
					}

					aFilteredItems.push(items[key]);
				}

				return aFilteredItems;
			};
		}
	]
);

angular.module('myApp.services')
	.service('lang', ['gettextCatalog','$routeParams','$rootScope','$location',
		function(gettextCatalog,$routeParams,$rootScope,$location) {
			'use strict';

			this.initLang = function(){
				gettextCatalog.debug = true;

				if($routeParams.lang){
					this.updateLang($routeParams.lang);
				}else {
					this.updateLang('fr');
				}
			};

			this.getCurrent = function(){
				this.initLang();
				return $rootScope.lang;
			};

			this.updateLang = function(newLang){
				$rootScope.lang = newLang;
				gettextCatalog.setCurrentLanguage(newLang);// Corresponds au header 'Language' du fichier .po;
			};
		}
	]
);

angular.module('myApp.services')
	.service('matchmaking', ['$http','user','api','superCache',
		function($http,user,api,superCache) {
			'use strict';
			this.getConf = function(){
				return api.call('matchmaking/');
			};

			this.join = function(matchmakingId,profilId){
				var currentUser = user.get();
				return api.call('matchmaking/join/'+matchmakingId+'/'+profilId+'/'+currentUser.username+'/'+currentUser.token);
			};
		}
	]
);

angular.module('myApp.services')
	.service('rdv', ['$http','user','api','superCache',
		function($http,user,api,superCache) {
			'use strict';
			this.getAll = function(){
				return api.call('rdv/');
			};

			this.getFormInfo = function(){
				var cache = superCache.promise('getFormInfo');
				if(cache !== false){
					return cache;
				}
				return api.call('rdv/form_info').success(function(data){
					superCache.put('getFormInfo',data);
				}).then(function(promise){
					return promise.data;
				});
			};

            this.add = function(plateform,game,tags,description,start,duree,nbParticipant,profilId){
                var currentUser = user.get();
                return api.call('rdv/add/'+plateform+'/'+game+'/'+tags+'/'+description+'/'+start+'/'+duree+'/'+nbParticipant+'/'+profilId+'/'+currentUser.username+'/'+currentUser.token);
            };

			this.get = function(id){
				return api.call('rdv/get/'+id);
			};

			this.join = function(rdvId,userGameId,username,token){
				return api.call('rdv/join/'+rdvId+'/'+userGameId+'/'+username+'/'+token);
			};

			this.acceptUser = function(userId,rdvId,username,token){
				return api.call('rdv/accept_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.kickUser = function(userId,rdvId,username,token){
				return api.call('rdv/kick_user/'+userId+'/'+rdvId+'/'+username+'/'+token);
			};

			this.leave = function(rdvId,userId,username,token){
				return api.call('rdv/leave/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};

			this.promote = function(rdvId,userId,username,token){
				return api.call('rdv/promote/'+rdvId+'/'+userId+'/'+username+'/'+token);
			};

			this.getNotifications = function(){
				return api.call('notifications/');
			};

			this.isLive = function(rdv){
				var now = new Date();
				now = now.getTime()/1000;
				return (typeof rdv !== "undefined" && rdv.start < now && rdv.end > now);
			};

			this.isEnded = function(rdv){
				var now = new Date();
				now = now.getTime()/1000;
				return (typeof rdv !== "undefined" && rdv.end < now);
			};
		}
	]
);

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
			this.getNotifPageUrl = function(){
				return getLang()+'/notification';
			};
			this.getMatchmakingPageUrl = function(){
				return getLang()+'/matchmaking';
			};
			this.getGamesPageUrl = function(){
				return getLang()+'/games';
			};

			this.goToGamesPage = function(){
				$location.path(this.getGamesPageUrl());
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

			this.goToMatchmakingId = function(id){
				$location.path(getLang()+'/matchmaking/waiting/'+id);
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
				$location.path(this.getNotFoundPageUrl(msg));
			};

			this.getProfilGamePageUrl = function(gameId,plateformId){
				return getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.getProfilGamePageByGameAndPlateformUrl = function(gameId,plateformId){
				return getLang()+'/profile/'+gameId+'/'+plateformId;
			};

			this.goToCreateProfilForGameAndPlateform = function(gameId,plateformId){
				this.goToGamesPage();
			};
		}
	]
);

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


angular.module('myApp.services')
	.service('tag', ['rdv',
		function(rdv) {
			'use strict';
			/**
			 * @desc autoCompleteUserTags retourne les tags utilisateurs complétés des autres tags disponibles
			 * @param aTags tags utilisateurs
			 */
			this.autoCompleteUserTags = function(aTags,allTags){


				var previousTags = '';
				var aPreviousTags = [];
				for(var i = 0; i < aTags.length -1; i++){
					previousTags =  previousTags+aTags[i]+' ';
					aPreviousTags.push(aTags[i]);
				}

				var autocompleteTag = [];
				for(var key in allTags){

					if(aPreviousTags.indexOf(allTags[key].nom) > -1){
						continue;
					}
					autocompleteTag.push(previousTags +allTags[key].nom);
				}

				return autocompleteTag;


			};

		}
	]
);
angular.module('myApp.services')
	.service('user', ['$http','storage','api','$rootScope','$q','$timeout',
		function($http,storage,api,$rootScope,$q,$timeout) {
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
				$rootScope.notificationsAlreadyRead = [];
				$rootScope.userGameSelected = null;
				storage.erasePersistant('user');
			};

			this.createUserGame = function(plateformId,gameId,profilName,gameUsername,data1,data2,data3,data4){

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

				return api.call('game_data/create/'+plateformId+'/'+gameId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+currentUser.username+'/'+currentUser.token).success(function(data){
					storeUser(data);
				});
			};

			this.updateUserGame = function(plateformId,gameId,profilId,profilName,gameUsername,data1,data2,data3,data4){

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

				return api.call('game_data/update/'+plateformId+'/'+gameId+'/'+profilId+'/'+profilName+'/'+gameUsername+'/'+data1+'/'+data2+'/'+data3+'/'+data4+'/'+currentUser.username+'/'+currentUser.token).success(function(data){
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

			this.updateOnline = function(currentUser){
				return api.call('login/online/'+currentUser.username+'/'+currentUser.token);
			};
		}
	]
);
