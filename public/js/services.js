'use strict';

/* Services */

angular.module('myApp.services', []).
  value('version', '0.1').
    factory('TableService', function ($http, $q) {
	    return {
        getLayoutEngineList: function() {
          return $http.get('/datasource').success(function(data){
          }).then(function(response) {
            if (typeof response.data === 'object') {
	            return response.data.layoutEngines;
	          } else {
	            // invalid response
	            return $q.reject(response.data);
	          }

	          }, function(response) {
	            // something went wrong
	            return $q.reject(response.data);
	          });
        }
      }
    });