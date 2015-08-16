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


  });
      

      /*

		Binding to data

We're going to pull down a 
JSON file then bind our view to it, so that we can 
play around with the generated app structure. OK, 
so in our main controller we want to use the 
$http service to pull down this JSON and bind to it.
Now we set the result of the HTTP 
call on scope so that our view can access it.


      */