'use strict';

/**
 * @ngdoc service
 * @name laptopApp.mainService
 * @description
 * # mainService
 * Service in the laptopApp.
 */
angular.module('laptopApp')
  .service('Mainservice', function Mainservice($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	getData : getData
    };
    function getData(){
      var deferred  = $q.defer();
      $http.get('json/data.json').then(function (response) {
      	console.log('response',response);
        if (response.data.statusCode) {
          deferred.reject({status: response.data.statusCode});
        } else {
          deferred.resolve(response.data);
        }
      }, function (err) {
        deferred.reject(err);
      });

      return deferred.promise;
	}
  });
