'use strict';

angular.module('TuduApp')
  .controller('MainCtrl', function($scope) {

    $scope.tudus = [
        {
          item: 'Kuntau',
          done: false
        },
        {
          item: 'HTML Boilerplate',
          done: true
        },
        {
          item: 'This is my baby steps',
          done: true
        },
        {
          item: 'You can do it!',
          done: false
        }
      ];

    $scope.addTudu = function(){
      $scope.tudus.push({ item: $scope.tudu, done: false});
      $scope.tudu = '';
    };

    $scope.removeTudu = function($index) {
      $scope.tudus.splice($index,1);
    };

    $scope.totalTudus = function () {
      return $scope.tudus.length + ($scope.tudus.length > 1 ? ' tudus' : ' tudu');
    };

    $scope.modal = function() {
      $dialog.dialog().open('views/modal.html', 'MainModalCtrl');
    };
  })
  .controller('MainModalCtrl', function($scope, dialog) {
    $scope.close = function() {
      dialog.close('ok');
    };
  });
