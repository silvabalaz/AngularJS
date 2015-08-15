'use strict';


angular.module("silvaApp", ["MyModuleA", "MyModuleB", "MyModuleC"]);

var A = angular.module('MyModuleA');
var B = angular.module('MyModuleB');


A.controller("DropdownFilter", function($scope) {
            

        $scope.place = [
        
          {
            text: 'restoran',
            value: '1'
          },
          {
            text: 'kafic',
            value: '2'
          
          },
          
          {
            text: 'kino',
            value: '3'
          }
        
        ];
        $scope.selected = {}; 
          });

A.controller("TextFilter", function($scope){});
A.controller("WishList", function($scope){});

A.controller("SearchCtrl", function ($scope, $routeParams, $http) {
        
        $scope.place = $routeParams.place;
        
      
        $http.get("data/places.json").success(function (results) {
            
            $scope.places = results.data;

     


        });

