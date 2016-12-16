'use strict';

describe('Directive: signInDirective', function () {

  // load the directive's module
  beforeEach(module('laptopApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sign-in-directive></sign-in-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the signInDirective directive');
  }));
});
