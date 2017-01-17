'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('registerCtrl', function ($scope, $http) {
    $scope.fname = '';
    $scope.mname = '';
    $scope.lname = '';
    $scope.mob = '';
    $scope.email = '';
    $scope.password = '';
    $scope.dob = '';
    $scope.country = '';
    $scope.male = '';
    $scope.female = '';
    $scope.unknown = '';

    $scope.register = function () {
   /*   console.log('first name', $scope.fname);
      console.log('middle name', $scope.mname);
      console.log('last name', $scope.lname);
      console.log('mobile', $scope.mob);
      console.log('date of birth', $scope.dob);
      console.log('country', $scope.country);
      console.log('male', $scope.male);
      console.log('female', $scope.female);
      console.log('unknown', $scope.unknown);
      console.log('email', $scope.email);
      console.log('password', $scope.password);*/
      var dataArray = [
                        {'first_name': $scope.fname},
                        {'middle_name' : $scope.mname},
                        {'last_name': $scope.lname},
                        {'gender':'Male'},
                        {'country': $scope.country},
                        {'dob': $scope.dob},
                        {'address': 'Pune'},
                        {'mobile': $scope.mob},
                        {'email': $scope.email},
                        {'password': $scope.password},
                        {'user_type': 'admin'} 
                      ];

      $http({method: 'POST', url: '/api/features/register',headers: {'Content-Type': 'json'}, data:{data: dataArray}}).

        success(function (data) {
          $scope.loading = false;
          console.log('/api/features/register',data);
        }).

        error(function (data, status) {
          $scope.loading = false;
          $scope.error = data && data.description ? data : createUnknownError(status);
        });
    }
  });
