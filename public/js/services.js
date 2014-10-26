'use strict';

/* Services */

angular.module('myApp.services', []).
  value('version', '0.1').
    factory('AppService', function ($http, $q) {
	    return {
        getData: function() {
          return $http.get('/api/datasource').success(function(data){
          }).then(function(response) {
            if (typeof response.data === 'object') {
	            return response.data;
	          } else {
	            // invalid response
	            return $q.reject(response.data);
	          }

	          }, function(response) {
	            // something went wrong
	            return $q.reject(response.data);
	          });
        },
        Datefn: function(messageDate){
          var date = new Date();
          var arr = messageDate.match(/(\d+)/g);
          if(messageDate == (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()){
            return 'Today';
          }else if(arr[0]==date.getMonth()+1 && arr[2]==date.getFullYear() && parseInt(arr[1]) == date.getDate()-1){
            return 'Yesterday';
          }else{
            return messageDate;
          }
        },
        Truncatetxt: function(text){
          var re = text.match(/^.{0,75}[\S]*/);
          var l = re[0].length;
          re = re[0].replace(/\s$/,'');
          if(l < text.length)
              re = re + "...";
          return re;
        }
      }
    });