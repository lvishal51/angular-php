'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:LaptoppartsCtrl
 * @description
 * # LaptoppartsCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('laptopPartsCtrl', function ($scope, $http) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.loading = true;
    $scope.awesomeThings = [{'id':'Part--1','relatedWith':'hardware','probDesc':'Camera'},
                            {'id':'Part--2','relatedWith':'hardware','probDesc':'WiFi Antena'},
                            {'id':'Part--3','relatedWith':'hardware','probDesc':'Inverter Board'},
                            {'id':'Part--4','relatedWith':'hardware','probDesc':'Inverter Cable'},
                            {'id':'Part--5','relatedWith':'hardware','probDesc':'Keyboard'},
                            {'id':'Part--6','relatedWith':'hardware','probDesc':'TouchPad Board'},
                            {'id':'Part--7','relatedWith':'hardware','probDesc':'Palmrest'},
                            {'id':'Part--8','relatedWith':'hardware','probDesc':'LED Board'},
                            {'id':'Part--9','relatedWith':'hardware','probDesc':'Battery'},  
                            {'id':'Part--10','relatedWith':'hardware','probDesc':'miniPCI Wireless Board'},
                            {'id':'Part--11','relatedWith':'hardware','probDesc':'VGA Board'},
                            {'id':'Part--12','relatedWith':'hardware','probDesc':'Bluetooth Board'},
                            {'id':'Part--13','relatedWith':'hardware','probDesc':'Bezel'},
                            {'id':'Part--14','relatedWith':'hardware','probDesc':'LCD Screen'},
                            {'id':'Part--15','relatedWith':'hardware','probDesc':'LED Screen'},
                            {'id':'Part--16','relatedWith':'hardware','probDesc':'LCD Back Cover'},
                            {'id':'Part--17','relatedWith':'hardware','probDesc':'Speakers'},
                            {'id':'Part--18','relatedWith':'hardware','probDesc':'LED Board Cover'},
                            {'id':'Part--18','relatedWith':'hardware','probDesc':'CPU FAN'},
                            {'id':'Part--20','relatedWith':'hardware','probDesc':'Heatsink'},
                            {'id':'Part--21','relatedWith':'hardware','probDesc':'Modem Board'}
                            {'id':'Part--22','relatedWith':'hardware','probDesc':'Hinges'},
                            {'id':'Part--22','relatedWith':'hardware','probDesc':'MotherBoard'}



                          ]
    // Get awesome things list
    $http({method: 'GET', url: '/api/features'}).

      success(function (data) {
        $scope.loading = false;
      }).

      error(function (data, status) {
        $scope.loading = false;
        $scope.error = data && data.description ? data : createUnknownError(status);
      });
  });
