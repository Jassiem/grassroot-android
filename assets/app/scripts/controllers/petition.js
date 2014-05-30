function PetitionCtrl($scope, apiService, $routeParams, $location) {
	$scope.petition;

	$scope.init = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.petition = data.petition;
			} else {
				$scope.petition = {name: 'Unable to retrieve petition', contents: ''};
			}
		}, '/api/get-petition', {petition_id: $routeParams.id});
	}
	$scope.init();

};

PetitionCtrl.$inject = ['$scope', 'apiService', '$routeParams', '$location'];