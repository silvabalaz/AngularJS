
'use strict';

/**
 * @ngdoc function
 * @name silvaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the silvaApp
 */

angular.module("silvaApp.controllers", [ ]) 

//angular.module('silvaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

/**
 * @ngdoc function
 * @name silvaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the silvaApp
 */
//angular.module('silvaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


.controller("SearchCtrl", function ($scope, $routeParams, $http) {
        
        $scope.place = $routeParams.place;
        
      
        $http.get("data/places.json").success(function (results) {
            $scope.places = results.data;
        });

