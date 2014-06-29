function StoriesCtrl($scope, apiService) {
	$scope.allStories = [];

  $scope.getStories = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.allStories = data.all_stories;

				for(i = 0; i < data.all_stories.length; i++) {
					if(data.all_stories[i].content.length > 150) {
						data.all_stories[i].content = data.all_stories[i].content.substring(0,150) + "...";
					}
				}
				$scope.allStories = data.all_stories;
				$scope.errorMessage = '';
			} else {
				$scope.errorMessage = 'No stories to display';
			}
		}, '/api/get-stories', {});
  };

  $scope.getStories();
};

StoriesCtrl.$inject = ['$scope', 'apiService'];