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
        controller: 'ContactCtrl'
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
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'RegisterCtrl'
      })
      .when('/ansOfProblems', {
        templateUrl: 'views/ansOfProblems.html',
        controller: 'ansOfProblemsCtrl'
      })
       .when('/parts', {
        templateUrl: 'views/parts.html',
        controller: 'partsCtrl'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html',
        controller: 'faqsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
