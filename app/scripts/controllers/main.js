'use strict';

angular.module('TuduApp')
  .controller('MainCtrl', function ($scope) {

    $scope.tudus = [ 'HTML5 Boilerplate', 'AngularJS', 'Karma', 'Nizam' ];

    $scope.addTudu = function(){
      $scope.tudus.push($scope.tudu);
      $scope.tudu = '';
    };

    $scope.removeTudu = function($index) {
      $scope.tudus.splice($index,1);
    };
  });
