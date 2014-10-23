'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ngTable'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/dashboard', {
      templateUrl: 'partials/dashboard',
      controller: 'dashboardCtrl'
    }).
    when('/blank',{
      templateUrl: 'partials/blank',
      controller: 'blankCtrl'
    }).
    when('/tables',{
      templateUrl: 'partials/tables',
      controller: 'tablesCtrl'
    }).
    when('/morris',{
      templateUrl: 'partials/morris',
      controller: 'morrisCtrl'
    }).
    when('/flot',{
      templateUrl: 'partials/flot',
      controller: 'flotCtrl'
    }).
    when('/forms',{
      templateUrl: 'partials/forms',
      controller: 'formsCtrl'
    }).
    when('/panels-wells',{
      templateUrl: 'partials/panels-wells',
      controller: 'panels-wellsCtrl'
    }).
    when('/buttons',{
      templateUrl: 'partials/buttons',
      controller: 'buttonsCtrl'
    }).
    when('/grid',{
      templateUrl: 'partials/grid',
      controller: 'gridCtrl'
    }).
    when('/typography',{
      templateUrl: 'partials/typography',
      controller: 'typographyCtrl'
    }).
    when('/notifications',{
      templateUrl: 'partials/notifications',
      controller: 'notificationsCtrl'
    }).
    otherwise({
      redirectTo: '/dashboard'
    });

  $locationProvider.html5Mode(true);
});
