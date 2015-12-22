myApp.controller('PollController', function ($scope, $routeParams, PollFactory) {
	$scope.poll = {};

	PollFactory.getPoll($routeParams.index, function (factoryData) {
		$scope.poll = factoryData;
	});

	$scope.makeVote = function (poll, option) {
		var input = {};

		input.poll = poll;
		input.option = option;

		PollFactory.makeVote(input, function () {
			PollFactory.getPoll($routeParams.index, function (factoryData) {
				$scope.poll = factoryData;
			});
		});
	}
});