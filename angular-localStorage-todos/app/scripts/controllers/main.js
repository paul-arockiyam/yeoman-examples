'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');
    var duplicate = false;

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.add('todos', $scope.todos);
    }, true);

    // Uncomment if you are disabling persistence
    //$scope.todos = [];

    $scope.addTodo = function () {
      if($scope.todo !=undefined){
        document.getElementById('err_null').style.display='none';
        if($scope.todos.indexOf($scope.todo) > -1){
          $scope.duplicate = true;        
        }else {
          $scope.duplicate = false;        
          $scope.todos.push($scope.todo);
          $scope.todo = '';
        }
      } else {
        document.getElementById('err_null').style.display='block';
      }
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
