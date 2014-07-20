function CardsCtrl($scope, apiService) {
	$scope.allCards = [];
	$scope.daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  $scope.getCards = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.allCards = data.all_cards;

				for(i = 0; i < $scope.allCards.length; i++) {
					$scope.allCards[i].start_date = $scope.parseDate($scope.allCards[i].start_date);
					$scope.allCards[i].end_date = $scope.parseDate($scope.allCards[i].end_date);

				}
				$scope.errorMessage = '';
			} else {
				$scope.errorMessage = 'No cards to display';
			}
		}, '/api/get-cards', {});
  };

  $scope.getCards();

  $scope.parseDate = function(unformattedDate) {
		var date = new Date(unformattedDate);

		var month = date.getMonth();
		var day = date.getDate();
		var year = date.getFullYear();

		formattedDate = month + '/' + day + '/' + year;
		return formattedDate;
  }
};

CardsCtrl.$inject = ['$scope', 'apiService'];