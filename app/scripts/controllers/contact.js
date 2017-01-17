'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.name = '';
    $scope.mobile = '';
    $scope.email = '';
    $scope.subject = '';
    $scope.message = '';

    $scope.contact = function () {
      console.log('name', $scope.name);
      console.log('mobile', $scope.mob);
      console.log('email', $scope.email);
      console.log('subject', $scope.sub);
      console.log('message', $scope.message);
      var dataArray = [
          {'name': $scope.name},
          {'email': $scope.email},
          {'mobile' : $scope.mobile},
          {'subject': $scope.subject},
          {'message': $scope.message}
      ];

      $http({ method: 'POST', url: '/api/features/save_contact',
              headers: {'Content-Type': 'json'},
              data:{data: dataArray} }).

        success(function (data) {
          console.log('/api/features/save_contact',data);
        }).

        error(function (data, status) {
        });
    };
   
});