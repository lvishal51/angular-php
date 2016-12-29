'use strict';

describe('Service: innerService', function () {

  // load the service's module
  beforeEach(module('laptopApp'));

  // instantiate service
  var innerService;
  beforeEach(inject(function (_innerService_) {
    innerService = _innerService_;
  }));

  it('should do something', function () {
    expect(!!innerService).toBe(true);
  });

});
