function StoriesCtrl($scope, apiService) {
	$scope.allStories = [];

  $scope.getStories = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.allStories = data.all_stories;
				console.log($scope.allStories);
				$scope.errorMessage = '';
			} else {
				$scope.errorMessage = 'No stories to display';
			}
		}, '/api/get-stories', {});
  };

  $scope.getStories();
};

StoriesCtrl.$inject = ['$scope', 'apiService'];