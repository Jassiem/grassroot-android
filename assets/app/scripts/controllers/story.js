function StoryCtrl($scope, apiService, $routeParams) {
	$scope.story;

	$scope.init = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.story = data.story;
			} else {
				$scope.story = {name: 'Unable to retrieve story', content: '', url: ''};
			}
		}, '/api/get-story', {story_id: $routeParams.id});
	}
	$scope.init();

};

StoryCtrl.$inject = ['$scope', 'apiService', '$routeParams'];