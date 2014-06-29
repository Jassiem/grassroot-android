function MessageCenterCtrl($scope, apiService) {
	$scope.allMessages = [];

	$scope.init = function() {
		apiService.get(function(data, status) {
			if(status === 200) {
				//$scope.allMessages = data.all_messages;
				for(i = 0; i < data.all_messages.length; i++) {
					if(data.all_messages[i].contents.length > 20) {
						data.all_messages[i].contents = data.all_messages[i].contents.substring(0,20) + "...";
					}
				}
				$scope.allMessages = data.all_messages;
			} else {
			}
		}, '/api/get-messages', {});
	}
	$scope.init();
};

MessageCenterCtrl.$inject = ['$scope', 'apiService'];