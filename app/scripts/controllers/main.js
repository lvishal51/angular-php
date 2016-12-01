'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('MainCtrl', function ($scope, $http,Mainservice,Innerservice) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.awesomeThings = [];
    $scope.loading = true;

    // Get awesome things list
          //$scope.loading = false;
    Mainservice.getData().then(function (resp) {
      $scope.loading = false;
      $scope.awesomeThings =resp;
      console.log('awesomeThings',$scope.awesomeThings);
      $scope.awesomeThings.forEach(function (thing) {
        thing.loading = true;
        Innerservice.getData(thing.href).then(function (data) {
              thing.loading = false;
              thing.description = data.description;
          }, function (err) {
              thing.loading = false;
              thing.error = data && data.description ? data : createUnknownError(status);
        });
          thing.loading = true;
      });            
    }, function (err) {
        $scope.loading = false;
        $scope.error = data && data.description ? data : createUnknownError(status);
    });         
  });
