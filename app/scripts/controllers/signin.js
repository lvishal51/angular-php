'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('signinCtrl', function ($scope, $http) {

    $scope.email = "";
    $scope.password = "";
    $scope.signin = function (email, password) {
      // body...
      console.log('email', $scope.email);
      console.log('password', $scope.password);
    }
  });
