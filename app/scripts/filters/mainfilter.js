'use strict';

/**
 * @ngdoc filter
 * @name laptopApp.filter:mainFilter
 * @function
 * @description
 * # mainFilter
 * Filter in the laptopApp.
 */
angular.module('laptopApp')
  .filter('mainFilter', function () {
    return function (input) {
      return 'mainFilter filter: ' + input;
    };
  });
