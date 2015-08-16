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
   

  	 $http.get('/data/places.json').success(function(result){

              $scope.places = result;


}

 