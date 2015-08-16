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
        templateUrl: 'views/a.html',
        controller: 'DropdownFilter'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
    




  angular.module("silvaApp", ["MyModuleA", "MyModuleB", "MyModuleC"]);

  var A = angular.module('MyModuleA');
  var B = angular.module('MyModuleB');
  var C = angular.module('MyModuleC');

  