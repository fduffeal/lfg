angular.module('myApp.directives')
    .directive('lfgProfile', ['user','rdv','tag','lang','redirection','$interval',
        function(user,rdv,tag,lang,redirection,$interval) {
            'use strict';
            return {
                scope:{
                    'lfgProfile':'='
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

                    $scope.userInfo = user.get();


                    /**
                     * autoRefreshDataNotif
                     */
                    var refreshDataNotif = function(){
                        rdv.getNotifications().success(function(data){
                            $scope.notifications = data;
                        });
                    };

                    var refreshTime = 12000;
                    var autoRefreshDataNotif = function(){
                        $scope.intervaNotificationId = $interval(function(){
                            refreshDataNotif();
                        }, refreshTime);
                    };

                    refreshDataNotif();
                    autoRefreshDataNotif();

                },
                restrict: 'E',
                templateUrl: 'html/directives/lfg-profile.html'
            };
        }
    ]
);
