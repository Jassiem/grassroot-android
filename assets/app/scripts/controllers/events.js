function EventsCtrl($scope, apiService) {
	$scope.allEvents = [];
	$scope.daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  $scope.getEvents = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.allEvents = data.all_events;

				for(i = 0; i < $scope.allEvents.length; i++) {
					var date = new Date($scope.allEvents[i].event_date);
					var month = date.getMonth();
					var day = date.getDate();
					var year = date.getFullYear();

					$scope.allEvents[i].event_date = month + '/' + day + '/' + year;
					$scope.allEvents[i].day = $scope.daysOfTheWeek[date.getDay()];
				}
				$scope.errorMessage = '';
			} else {
				$scope.errorMessage = 'No events to display';
			}
		}, '/api/get-events', {});
  };

  $scope.getEvents();
};

EventsCtrl.$inject = ['$scope', 'apiService'];