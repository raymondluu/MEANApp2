myApp.controller('LoginController', function ($scope, $location, UserFactory) {
	$scope.login = function () {
		UserFactory.getUserByName($scope.input, function (factoryData) {
			if (factoryData) {
				$location.path('/dashboard');
			}
			else {
				UserFactory.addUser($scope.input, function () {
					$scope.input = {};

					$location.path('/dashboard');
				});
			}	
		});	
	}
})