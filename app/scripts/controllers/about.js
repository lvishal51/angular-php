'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('AboutCtrl', function ($scope, $http, Mainservice) {
    
  	$scope.displayDiv = false;
	$scope.checkboxes = [];
    $scope.hideFirstDiv = function() {
    	$scope.displayDiv = !$scope.displayDiv;
    }

    Mainservice.getCheckboxData().then(function (data) {
      $scope.checkboxes =data;
      console.log('$scope.checkboxes',$scope.checkboxes);
      }, function (err) {
          $scope.error = data && data.description ? data : createUnknownError(status);
    });         

  });
