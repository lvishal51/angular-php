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

    $scope.awesomeThings = [{'id':'Problem--1','relatedWith':'software','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--2','relatedWith':'software','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--3','relatedWith':'software','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--4','relatedWith':'software','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--5','relatedWith':'software','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--6','relatedWith':'software','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--7','relatedWith':'software','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--8','relatedWith':'software','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--9','relatedWith':'software','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},  
                            {'id':'Problem--10','relatedWith':'software','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--11','relatedWith':'hardware','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--12','relatedWith':'hardware','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--13','relatedWith':'hardware','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--14','relatedWith':'hardware','probDesc':'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages'},
                            {'id':'Problem--15','relatedWith':'hardware','probDesc':'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
                            {'id':'Problem--16','relatedWith':'hardware','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--17','relatedWith':'hardware','probDesc':'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
                            {'id':'Problem--18','relatedWith':'hardware','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--18','relatedWith':'hardware','probDesc':'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
                            {'id':'Problem--20','relatedWith':'hardware','probDesc':'content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English'},
                            {'id':'Problem--21','relatedWith':'hardware','probDesc':'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'},
                          ];                      
    $scope.loading = true;

    $scope.selectedSortOption = 'software';

    // Get awesome things list
   $http({method: 'GET', url: '/api/features'}).

      success(function (data) {
        $scope.loading = false;
//        $scope.awesomeThings = data;

        // Get description of each thing
      }).

      error(function (data, status) {
        $scope.loading = false;
        $scope.error = data && data.description ? data : createUnknownError(status);
      });
  });
