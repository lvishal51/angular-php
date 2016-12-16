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
        controller: 'registerCtrl'
      })
      .when('/listOfProblems', {
        templateUrl: 'views/listOfProblems.html',
        controller: 'listOfProblemsCtrl'
      })
      .when('/laptopParts', {
        templateUrl: 'views/laptopParts.html',
        controller: 'laptopPartsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
