// Service definition
grassroot.service('apiService', ['$http', function($http){
  var API_DOMAIN = "http://aqueous-tor-6124.herokuapp.com"

  /* enable CORS */
  $http.defaults.useXDomain = true;
  delete $http.defaults.headers.common['X-Requested-With'];

  var sendResponse = function(requestConfig, callback) {
    $http(requestConfig).success(function(data,status){
      callback(data,status);
    }).error(function(data, status) {
      callback(data, status);
    });   
  }

  this.get = function(callback) {
    var url = API_DOMAIN + arguments[1];
    var config = {method: arguments[2], url: url, params: arguments[3]};

    sendResponse(config, callback);
  };

  this.post = function(callback) {
    var url = API_DOMAIN + arguments[1];
    var config = {method: arguments[2], url: url, data: arguments[3]};

    sendResponse(config, callback);
  };

}]);

