'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('MainCtrl', function ($scope, $http,Mainservice,$location) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.awesomeThings = [];
    $scope.loading = true;
    $scope.goTo = function(path) {
        console.log('path',path);
        $location.path(path);
    }
    // Get awesome things list
    //$scope.loading = false;
    Mainservice.getData().then(function (data) {
      $scope.loading = false;
      $scope.awesomeThings =data;
      console.log('awesomeThings',$scope.awesomeThings);
      }, function (err) {
          $scope.loading = false;
          $scope.error = data && data.description ? data : createUnknownError(status);
    });         
  });

 


  
