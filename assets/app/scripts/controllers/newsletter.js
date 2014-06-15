function NewsletterCtrl($scope, apiService, $location) {
	$scope.formData = {};
	$scope.showErrors = false;
	$scope.errorMessage = '';

	$scope.signUp = function() {
		// check if form is valid
    if ($scope.form.signup.$valid === false) {
      $scope.showErrors = true;
      return;
    }

    // add key for rails strong parameters and user data
    $scope.formData = {newsletter: $scope.formData};

    // send form data to rails api
    apiService.apiCall(function(data, status){
      if(status == 200) {
        $location.url('/take_action');
      }
      else {
        $scope.errorMessage = 'Could not subscribe. Try again later.';
      }

    }, 'POST', '/api/subscribe', $scope.formData);
	};

  $scope.cancel = function() {
    $location.url('/take_action');
  }

};

NewsletterCtrl.$inject = ['$scope', 'apiService', '$location'];