  angular.module('laptopApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/raw-html/index.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/raw-html/details.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
