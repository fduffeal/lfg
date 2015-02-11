angular.module('myApp.directives')
    .directive('lfgInvitePopup', ['rdv','$filter','user',
        function(rdv,$filter,user) {
            'use strict';
            return {
                scope:{

                },
                link: function($scope, element, attrs) {

                    $scope.currentUser = user.get();

                    $scope.aRdv = [];

                    var getRdv = function(){
                        rdv.getAll().success(function(data) {
                            // this callback will be called asynchronously
                            // when the response is available
                            $scope.aRdv = data;

                            updateMyRdv();

                        }).error(function(data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                        });
                    }


                    $scope.rdvInvite = null;
                    var updateMyRdv = function(){
                        //filterRdvWithMe:currentUser.id:plateformSelected:tags:slotMinAvailable:slotMaxAvailable
                        if($scope.currentUser !== null){

                            if(typeof $scope.plateform === "undefined" || $scope.plateform  === null){
                                var plateformId = null;
                            }else {
                                var plateformId = $scope.plateform.id;
                            }



                            //if($scope.plateform)
                            $scope.aMyRdv = $filter('filterRdvWithMe')($scope.aRdv,$scope.currentUser.id,plateformId,$scope.tags,$scope.slotMinAvailable,$scope.slotMaxAvailable);

                            for(var i in $scope.aMyRdv){
                                $scope.aMyRdv[i].description = $scope.aMyRdv[i].description +' '+ $filter('date')($scope.aMyRdv[i].start*1000,'yyyy-MM-dd');
                            }
                            $scope.rdvInvite = $scope.aMyRdv[0];
                        }
                    };


                    $scope.displayInvite = false;

                    $scope.$on('invite',function(event,data){

                        console.log('userInvite',data);
                        if(typeof data == "undefined"){
                            return;
                        }
                        $scope.userInvite = data[0];
                        $scope.displayInvite = true;


                        console.log('popup',$scope.displayInvite,$scope.userInvite);
                    });


                    $scope.submitInvite = function(){
                        console.log('submitInvite',$scope.inviteForm);
                        if($scope.inviteForm.$valid === false){
                            return;
                        }

                        var invitePromise = rdv.invite($scope.userInvite,$scope.rdvInvite);
                        if(invitePromise !== false){
                            invitePromise.then(function(data){
                                console.log('invitePromise',data);
                            });
                        }
                    };

                    getRdv();




                },
                restrict: 'E',
                templateUrl: '/html/directives/lfg-invite-popup.html'
            };
        }
    ]
);