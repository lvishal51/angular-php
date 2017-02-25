'use strict';

/**
 * @ngdoc function
 * @name laptopApp.controller:ListofproblemsCtrl
 * @description
 * # ListofproblemsCtrl
 * Controller of the laptopApp
 */
angular.module('laptopApp')
  .controller('listOfProblemsCtrl', function ($scope, $http) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }

    $scope.awesomeThings = [{'id':'Problem--1','relatedWith':'hardware','probDesc':'You turned on the power but it doesnt work.'},
                            {'id':'Problem--2','relatedWith':'hardware','probDesc':'The Battery LED power indicator is blinking.'},
                            {'id':'Problem--3','relatedWith':'hardware','probDesc':'You are losing battery power too quickly.'},
                            {'id':'Problem--4','relatedWith':'hardware','probDesc':'The battery pack will not charge.'},
                            {'id':'Problem--5','relatedWith':'hardware','probDesc':'The notebook feels too hot.'},
                            {'id':'Problem--6','relatedWith':'hardware','probDesc':'Battery time is shorter than expected.'},
                            {'id':'Problem--7','relatedWith':'software','probDesc':'Speed Problems.'},
                            {'id':'Problem--8','relatedWith':'software','probDesc':'Switch on the laptop Blue screen was appeared.'},
                            {'id':'Problem--9','relatedWith':'hardware','probDesc':'Laptop battery plugged in, not charging Windows problem.'},  
                            {'id':'Problem--10','relatedWith':'software','probDesc':'Bluetooth problems.'},
                            {'id':'Problem--11','relatedWith':'software','probDesc':'Boots but wont launch windows.'},
                            {'id':'Problem--12','relatedWith':'hardware','probDesc':'Laptop Makes Single(1) Beep sound when I press power button.'},
                            {'id':'Problem--13','relatedWith':'hardware','probDesc':'Laptop Makes double(2) Beep sound when I press power button.'},
                            {'id':'Problem--14','relatedWith':'hardware','probDesc':'Laptop Makes 3 Beep sound when I press power button.'},
                            {'id':'Problem--15','relatedWith':'hardware','probDesc':'Laptop Makes 4 Beep sound when I press power button.'},
                            {'id':'Problem--16','relatedWith':'hardware','probDesc':'Laptop Makes 5 Beep sound when I press power button.'},
                            {'id':'Problem--17','relatedWith':'hardware','probDesc':'Laptop Makes 6 Beep sound when I press power button.'},
                            {'id':'Problem--18','relatedWith':'hardware','probDesc':'Laptop Makes 7 Beep sound when I press power button.'},
                            {'id':'Problem--18','relatedWith':'hardware','probDesc':'Laptop Makes 8 Beep sound when I press power button.'},
                            {'id':'Problem--20','relatedWith':'software','probDesc':'Laptop starts but, stucks at windows screen.'},
                            {'id':'Problem--21','relatedWith':'software','probDesc':'Laptop is working properly but, While playing a audio or video some error has occured.'},
                          ];                      
    $scope.loading = true;

    $scope.selectedSortOption = 'software';

    // Get awesome things list
   $http({method: 'GET', url: '/api/features'}).

      success(function (data) {
        $scope.loading = false;
        console.log('/api/features',data);
//        $scope.awesomeThings = data;

        // Get description of each thing
      }).

      error(function (data, status) {
        $scope.loading = false;
        $scope.error = data && data.description ? data : createUnknownError(status);
      });
  });
