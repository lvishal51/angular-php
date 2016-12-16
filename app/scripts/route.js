  angular.module('laptopApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about-us.html',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
