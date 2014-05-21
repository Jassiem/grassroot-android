function EventCtrl($scope, apiService, $routeParams) {
	$scope.event;
	console.log('some stuff');
	apiService.get(function(data, status) {
		if(status === 200) {
			$scope.event = data.event;
		} else {
			$scope.event = {name: 'Unable to retrieve event', description: ''};
		}
	}, '/api/get-event', {event_id: $routeParams.id});
};

EventCtrl.$inject = ['$scope', 'apiService', '$routeParams'];