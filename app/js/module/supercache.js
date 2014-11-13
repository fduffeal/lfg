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