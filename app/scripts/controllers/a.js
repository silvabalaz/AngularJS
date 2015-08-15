'use strict';

var A = angular.module('silvaApp')

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
