'use strict';

/**
 * @ngdoc service
 * @name laptopApp.innerService
 * @description
 * # innerService
 * Service in the laptopApp.
 */
angular.module('laptopApp')
  .service('Innerservice', function Innerservice($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	getData : getData
    };
    function getData(url){
      var deferred  = $q.defer();
      var url = url;

      $http.get(url).then(function (response) {
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
