'use strict';

/**
 * @ngdoc directive
 * @name laptopApp.directive:mainDirective
 * @description
 * # mainDirective
 */
angular.module('laptopApp')
  .directive('header', function () {
    return {
      restrict: 'E',		
      templateUrl: 'views/raw-html/header.html',
      controllerUrl: 'headerCtrl'
    };
  })
  .directive('footer', function () {
    return {
      restrict: 'E',		
      templateUrl: 'views/raw-html/footer.html',
      controllerUrl: 'footerCtrl'
    };
  });
