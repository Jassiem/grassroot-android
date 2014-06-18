function MessageCtrl($scope, apiService, $routeParams) {
	$scope.message;
	$scope.message_id = $routeParams.id;

	$scope.init = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.message = data.message;
			} else {
				$scope.message = {title: 'Unable to retrieve message', contents: ''};
			}
		}, '/api/get-message', {message_id: $routeParams.id});
	}
	$scope.init();

};

MessageCtrl.$inject = ['$scope', 'apiService', '$routeParams'];