angular.module('myApp.controllers').controller('MatchmakingCtrl',
	['$scope',
		function ($scope) {
			'use strict';

			$scope.aGamers = [
			{
				'id': 1,
				'gamertags': {
					'PS4': 'PoneyMCH'
				},
				game: {
					'destiny': {
						'role': {
							'name': 'Titan',
							'level': '26',
							'url_info': 'http://www.bungie.net/fr/Legend/2/4611686018433351063/2305843009214841831'
						}
					}
				}
			}, {
				'id':2,
				'gamertags': {
					'PS4': 'Fifoukiller84'
				},
				game: {
					'destiny': {
						'role': {
							'name':'Hunter',
							'level':'27',
							'url_info':'http://www.bungie.net/fr/Legend/2/4611686018430647711/2305843009215026244'
						}
					}
				}
			}];


		}
	]
);
