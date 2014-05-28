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
		var date = new Date($scope.event.event_date);
		// prep some variables
	  var startDate = new Date(date.getYear(),date.getMonth()-1,date.getDay(),0,0,0,0,0); // beware: month 0 = january, 11 = december
	  var endDate = new Date(date.getYear(),date.getMonth()-1,date.getDay(),0,0,0,0,0);
	  var title = $scope.event.name;
	  var location = "TBD";
	  var notes = $scope.event.description;
	  
	  var success = function(message) { alert("Success: " + JSON.stringify(message)); };
	  var error = function(message) { alert("Error: " + message); };

	  // create an event interactively (only supported on Android)
	  window.plugins.calendar.createEventInteractively(title,location,notes,startDate,endDate,success,error);
	}

};

EventCtrl.$inject = ['$scope', 'apiService', '$routeParams'];