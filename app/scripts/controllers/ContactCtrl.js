'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.name = '';
    $scope.mob = '';
    $scope.email = '';
    $scope.sub = '';
    $scope.message = '';

    $scope.contact = function () {
      console.log('name', $scope.name);
      console.log('mobile', $scope.mob);
      console.log('email', $scope.email);
      console.log('subject', $scope.sub);
      console.log('message', $scope.message);
    };
   
  });