'use strict';

/**
 * @ngdoc overview
 * @name silvaApp
 * @description
 * # silvaApp
 *
 * Main module of the application.
 */
angular
  .module('silvaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',            
    'ngSanitize',
    'ngTouch'

    //'LocalStorageModule'
  ]).config(function ($routeProvider) {
    $routeProvider
     .when('/', {
        templateUrl: 'index.html',
        controller: 'MainCtrl'
      })
     .when('/c', {
        templateUrl: 'views/c.html',
        controller: 'OdabraneLokacije'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

    


 /*.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]) */

  angular.module("silvaApp", ["MyModuleA", "MyModuleB", "MyModuleC"]);

  var A = angular.module('MyModuleA');
  var B = angular.module('MyModuleB');
  var C = angular.module('MyModuleC');

  