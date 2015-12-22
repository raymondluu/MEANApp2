myApp.controller('DashboardController', function ($scope, $location, UserFactory, PollFactory) {
	$scope.user = UserFactory.getCurrentUser();
	$scope.polls = {};

	PollFactory.getPolls(function (factoryData) {
		$scope.polls = factoryData;
	});

	$scope.deletePoll = function (poll) {
		PollFactory.deletePoll(poll, function () {
			PollFactory.getPolls(function (factoryData) {
				$scope.polls = factoryData;
			});
		})
	}
});