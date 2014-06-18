function MessageCenterCtrl($scope, apiService) {
	$scope.allMessages = [];

	$scope.init = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				$scope.allMessages = data.all_messages;
			} else {
			}
		}, '/api/get-messages', {});
	}
	$scope.init();
};

MessageCenterCtrl.$inject = ['$scope', 'apiService'];