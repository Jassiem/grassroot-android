function PetitionsCtrl($scope, apiService) {
	$scope.allPetitions = [];

  $scope.getPetitions = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.allPetitions = data.all_petitions;
				console.log($scope.allPetitions);
				$scope.errorMessage = '';
			} else {
				$scope.errorMessage = 'No petitions to display';
			}
		}, '/api/get-petitions', {});
  };

  $scope.getPetitions();
};

PetitionsCtrl.$inject = ['$scope', 'apiService'];