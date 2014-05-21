'use strict';

// dashboard controller
function MainCtrl($scope, apiService, $http) {
  $scope.output = '';
  apiService.get(function(data,status){
  	if( status === 200) {
  		$scope.output = data;
  	} else {
  		$scope.output = 'error with api call';
  	}
  	
  },'/api/test', {});

}
MainCtrl.$inject = ['$scope', 'apiService', '$http'];
