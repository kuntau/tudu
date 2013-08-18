'use strict';

angular.module('TuduApp')
  .controller('LoginCtrl', function ($scope, $location, AuthenticationService) {
    $scope.sampleUsers = [
      {
        username: 'admin',
        password: 'pass'
      },
      {
        username: 'user',
        password: 'pass'
      }
    ];

    $scope.login = function () {
      AuthenticationService.login(this.credentials).success(function () {
        $location.path('/');
      });
    };
  });
