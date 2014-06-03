function SignPetitionCtrl($scope, apiService, $location) {
	$scope.formData = {};
	$scope.showErrors = false;
	$scope.errorMessage = '';

	$scope.signPetition = function() {
		// check if form is valid
    if ($scope.form.signpetition.$valid === false) {
      $scope.showErrors = true;
      return;
    }

    // add key for rails strong parameters and user data
    $scope.formData = {petition: $scope.formData};

    // send form data to rails api
    apiService.apiCall(function(data, status){
      if(status == 200) {
        $location.url('/take_action');
      }
      else {
        $scope.errorMessage = 'Petition signing is down. Try again later.';
      }

    }, 'POST', '/api/sign-petition', $scope.formData);
	};

};

SignPetitionCtrl.$inject = ['$scope', 'apiService', '$location'];