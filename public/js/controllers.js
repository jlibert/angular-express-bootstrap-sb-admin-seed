'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http, $location, AppService) {
    
    $scope.Datefn  = function(messageDate){return AppService.Datefn(messageDate);}
    $scope.TruncMessage  = function(message){return AppService.Truncatetxt(message);}
    
    AppService.getData().then(function(data) {
      $scope.inbox = data.inbox;
      $scope.processes = data.processes;
    });
  }).
  controller('dashboardCtrl', function ($scope, $location, AppService) {
    
    AppService.getData().then(function(data) {
      $scope.dashboardTable = data.dashboardTable;
      $scope.notifications = data.notifications;
      $scope.chat = data.chat;
      $scope.timeline = data.timeline;
    });
    
    $scope.chatDirectionClass = function(direction){
      return (direction == 'Outgoing')?'left':'right';
    }
    
    // write Ctrl
    $scope.$on('$viewContentLoaded', function () 
     {
       $scope.$parent.name = 'Dashboard';
       $scope.$parent.location = $location.path();
       // javascript code here
       $('div#page-wrapper div:last').nextAll('script').remove();
       $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/morris/raphael.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/morris/morris.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/morris/morris-data.js"></script>');
     });
  }).
  controller('flotCtrl', function ($scope, $location) {
    // write Ctrl here
    $scope.$on('$viewContentLoaded', function () 
     {
       $scope.$parent.name = 'Flot';
       $scope.$parent.location = $location.path();
       // javascript code here
       $('div#page-wrapper div:last').nextAll('script').remove();
       $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/flot/excanvas.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/flot/jquery.flot.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/flot/jquery.flot.pie.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/flot/jquery.flot.resize.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/flot/jquery.flot.tooltip.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/flot/flot-data.js"></script>');
     });
  }).
  controller('morrisCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function () 
     {
      $scope.$parent.name = 'Morris.js Charts';
      $scope.$parent.location = $location.path();
      // javascript code here
      $('div#page-wrapper div:last').nextAll('script').remove();
      $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/morris/raphael.min.js"></script>'+
                                      '<script src="sb-admin-2/js/plugins/morris/morris.min.js"></script>'+
                                      '<script src="sb-admin-2/js/plugins/morris/morris-data.js"></script>');
     });
  }).



  controller('tablesCtrl', function($scope, $filter, $location, AppService, ngTableParams){
    
    AppService.getData().then(function(data) {
      
      $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,           // count per page
        sorting: {
          name: 'asc' // initial sorting
        },
        filter: {
          name: ''
        }
      }, {
        total: data.layoutEngines.length,
        getData: function($defer, params) {
          var filteredData = params.filter() ? $filter('filter')(data.layoutEngines, params.filter()) : data.layoutEngines;
          var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data.layoutEngines;

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });
    $scope.nativeTableData = data.nativeTableData;    
    });
    
    
    $scope.$on('$viewContentLoaded', function () 
     {
      $scope.$parent.name = 'Tables';
      $scope.$parent.location = $location.path();
       $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).



controller('formsCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Forms';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('gridCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Grid';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('typographyCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Typography';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('buttonsCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Buttons';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('notificationsCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Notifications';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('panels-wellsCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Panels and Wells';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('blankCtrl', function($scope, $location){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Blank';
      $scope.$parent.location = $location.path();
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  });
