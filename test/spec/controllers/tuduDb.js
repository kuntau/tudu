'use strict';

describe('Controller: TududbCtrl', function () {

  // load the controller's module
  beforeEach(module('TuduApp'));

  var TududbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TududbCtrl = $controller('TududbCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
