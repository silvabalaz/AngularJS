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
  ])
 /*.config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }]) */

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/a.html',
        controller: 'MyControllerA'
      })
      .when('/b', {
        templateUrl: 'views/b.html',
        controller: 'MyControllerB'
      })
      .when('/c', {
        templateUrl: 'views/c.html',
        controller: 'MyControllerC'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
