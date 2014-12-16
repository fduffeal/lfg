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
