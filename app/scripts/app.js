'use strict';

/**
 * @ngdoc overview
 * @name silvaApp
 * @description
 * # silvaApp
 *
 * Main module of the application.
 */

/* global app:true */
/* exported app */

var app = angular
  .module('silvaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',            
    'ngSanitize',
    'ngTouch'
    'MyModuleA', 
    'MyModuleB', 
    'MyModuleC'
    'LocalStorageModule'
  ]).config(['localStorageServiceProvider', '$routeProvider', function(localStorageServiceProvider, $routeProvider){
    localStorageServiceProvider.setPrefix('ls');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/view1.html',
        controller: 'SearchCtrl'
      })
      .when('/', {
        templateUrl: 'views/view2.html',
        controller: 'TextFilter'
      })
      .when('/', {
        templateUrl: 'views/view3.html',
        controller: 'DropdownFilter'
      })
      .when('/', {
        templateUrl: 'views/view4.html',
        controller: 'SearchCtrl'
      })
      .when('/', {
        templateUrl: 'views/view5.html',
        controller: 'SearchCtrl'
      })
      .when('/', {
        templateUrl: 'views/view6.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
    




  angular.module("silvaApp", ["MyModuleA", "MyModuleB", "MyModuleC"]);



  