  angular.module('laptopApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/raw-html/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/raw-html/about-us.html',
        controller: 'AboutCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/raw-html/details.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/raw-html/contact.html',
        controller: 'AboutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/raw-html/register.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
