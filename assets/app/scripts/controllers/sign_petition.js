function SignPetitionCtrl($scope, apiService, $location) {
	$scope.formData = {};
	$scope.showErrors = false;
	$scope.errorMessage = '';

	$scope.signPetition = function() {
		alert('Signed!');
		$location.url('/take_action');
	}
};

SignPetitionCtrl.$inject = ['$scope', 'apiService', '$location'];