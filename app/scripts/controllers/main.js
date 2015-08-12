'use strict';

/**
 * @ngdoc function
 * @name silvaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the silvaApp
 */
angular.module('silvaApp')
  .controller('MainCtrl', function ($scope, localStorageService ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
