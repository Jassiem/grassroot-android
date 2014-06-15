function SignPetitionCtrl($scope, apiService, $location, $routeParams) {
	$scope.formData = {};
	$scope.showErrors = false;
	$scope.errorMessage = '';

	$scope.signPetition = function() {
		// check if form is valid
    if ($scope.form.signpetition.$valid === false) {
      $scope.showErrors = true;
      return;
    }

    // add key for rails strong parameters and petition data
    $scope.formData.petition_id = $routeParams.id;
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

  $scope.cancel = function() {
    $location.url('/take_action');
  }

};

SignPetitionCtrl.$inject = ['$scope', 'apiService', '$location'];