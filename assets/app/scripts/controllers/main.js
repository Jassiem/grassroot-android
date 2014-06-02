'use strict';

// dashboard controller
function MainCtrl($scope, apiService, $http, cordovaReady, $timeout) {
  $scope.output = '';

  $scope.init = function() {
  	apiService.get(function(data,status){
	  	if( status === 200) {
	  		$scope.output = data;
	  	} else {
	  		$scope.output = 'error with api call';
	  	}
	  	
	  },'/api/test', {});

	  document.addEventListener('deviceready', $scope.startGCM(), false);
  };

  $scope.startGCM = function() {
  	var successHandler = function(result) {
  		//alert("Success. Result = " + result);
      console.log('success');
  	};

  	var errorHandler = function(error) {
  		alert('giraffes');
  	};

		var pushNotification = window.plugins.pushNotification;
		pushNotification.register(successHandler, errorHandler,{"senderID":"198488259531","ecb":"app.onNotification"});
  };

  $scope.init();

}
MainCtrl.$inject = ['$scope', 'apiService', '$http', 'cordovaReady', '$timeout'];
