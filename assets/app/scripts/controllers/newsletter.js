function NewsletterCtrl($scope, apiService, $location) {
	$scope.formData = {};
	$scope.showErrors = false;
	$scope.errorMessage = '';

	$scope.signUp = function() {
		alert('Subscribed.');
		$location.url('/take_action')
	};
};

NewsletterCtrl.$inject = ['$scope', 'apiService', '$location'];