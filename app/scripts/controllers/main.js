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



    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos);
    }, true);

    // Uncomment if you are disabling persistence
    //$scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };


  });
      

 