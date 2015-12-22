myApp.controller('CreatePollController', function ($scope, $location, UserFactory, PollFactory) {
	$scope.user = UserFactory.getCurrentUser();

	$scope.addPoll = function () {
		var poll = {};
		poll.user = $scope.user;
		poll.options = [];
		poll.options.push({option: $scope.input.optionOneString, votes: 0});
		poll.options.push({option: $scope.input.optionTwoString, votes: 0});
		poll.options.push({option: $scope.input.optionThreeString, votes: 0});
		poll.options.push({option: $scope.input.optionFourString, votes: 0});
		poll.question = $scope.input.question;

		console.log(poll);
		PollFactory.addPoll(poll, function () {
			$scope.input = {};

			$location.path('/dashboard');
		});
	}
});