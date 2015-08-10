'use strict';

/**
 * @ngdoc function
 * @name silvaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the silvaApp
 */
angular.module('silvaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
