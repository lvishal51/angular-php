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
      templateUrl: 'views/header.html',
      controllerUrl: 'headerCtrl'
    };
  })
  .directive('footer', function () {
    return {
      restrict: 'E',		
      templateUrl: 'views/footer.html',
      controllerUrl: 'footerCtrl'
    };
  })
  .directive('signInDirective', function () {
    return {
      templateUrl: 'views/signIn.html',
      controllerUrl: 'signinCtrl',
      restrict: 'E'
    };
  });

