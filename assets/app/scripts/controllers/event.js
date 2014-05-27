function EventCtrl($scope, apiService, $routeParams) {
	$scope.event;

	$scope.init = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.event = data.event;
			} else {
				$scope.event = {name: 'Unable to retrieve event', description: ''};
			}
		}, '/api/get-event', {event_id: $routeParams.id});
	}
	$scope.init();

	$scope.addToCalendar = function() {
		alert('Added!');
	}

};

EventCtrl.$inject = ['$scope', 'apiService', '$routeParams'];