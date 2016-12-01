'use strict';

/**
 * @ngdoc directive
 * @name laptopApp.directive:mainDirective
 * @description
 * # mainDirective
 */
angular.module('laptopApp')
  .directive('mainDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mainDirective directive');
      }
    };
  });
