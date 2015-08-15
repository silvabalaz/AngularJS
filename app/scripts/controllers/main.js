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
    $scope.map = {

	center:{latitude: 45, longitude: -73 },
	zoom:8

    }
    $scope.marker = {

    					coords:{latitude: 45, longitude: -73}

                    }
  });
