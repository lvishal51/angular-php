'use strict';

/**
 * @ngdoc overview
 * @name laptopApp
 * @description
 * # laptopApp
 *
 * Main module of the application.
 */
var app = angular
  .module('laptopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularValidator'
  ]);

 app.run(['$window', '$rootScope', 
    function ($window ,  $rootScope) {
      $rootScope.goBack = function(){
        $window.history.back();
      };
}]);