'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngRoute', 'ngTable']).
  controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
    
  }).
  controller('dashboardCtrl', function ($scope, $location, TableService) {
    
    TableService.getTableData().then(function(data) {
      $scope.dashboardTable = data.dashboardTable;
      $scope.notifications = data.notifications;
      $scope.chat = data.chat;
      $scope.timeline = data.timeline;
    });
    
    // write Ctrl
    $scope.$on('$viewContentLoaded', function () 
     {
       $scope.$parent.name = 'Dashboard';
       // javascript code here
       $('div#page-wrapper div:last').nextAll('script').remove();
       $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/morris/raphael.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/morris/morris.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/morris/morris-data.js"></script>');
     });
  }).
  controller('flotCtrl', function ($scope) {
    // write Ctrl here
    $scope.$on('$viewContentLoaded', function () 
     {
       $scope.$parent.name = 'Flot';
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
  controller('morrisCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function () 
     {
      $scope.$parent.name = 'Morris.js Charts';
      // javascript code here
      $('div#page-wrapper div:last').nextAll('script').remove();
      $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/morris/raphael.min.js"></script>'+
                                      '<script src="sb-admin-2/js/plugins/morris/morris.min.js"></script>'+
                                      '<script src="sb-admin-2/js/plugins/morris/morris-data.js"></script>');
     });
  }).



  controller('tablesCtrl', function($scope, $filter, TableService, ngTableParams){
    
    TableService.getTableData().then(function(data) {
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
        total: 1,
        getData: function($defer, params) {
          var filteredData = params.filter() ? $filter('filter')(data.layoutEngines, params.filter()) : data.layoutEngines;
          var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;

          params.total(orderedData.length); // set total for recalc pagination
          $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });
    $scope.nativeTableData = data.nativeTableData;    
    });
    
    $scope.$on('$viewContentLoaded', function () 
     {
      $scope.$parent.name = 'Tables';
     });
  }).



controller('formsCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Forms';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('gridCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Grid';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('typographyCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Typography';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('buttonsCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Buttons';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('notificationsCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Notifications';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('panels-wellsCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Panels and Wells';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  }).controller('blankCtrl', function($scope){
    $scope.$on('$viewContentLoaded', function()
     {
      $scope.$parent.name = 'Blank';
      $('div#page-wrapper div:last').nextAll('script').remove();
     });
  });
