myApp.factory('PollFactory', function ($http) {
	var factory = {};
	var factoryPolls = {};

	factory.addPoll = function (poll, callback) {
		$http.post('/polls/add', poll).success(function () {
			callback();
		});
	};

	factory.getPolls = function (callback) {
		$http.get('/polls').success(function (dbData) {
			factoryPolls = dbData;

			callback(factoryPolls);
		});
	};

	factory.getPoll = function (index, callback) {
		$http.get('/polls').success(function (dbData) {
			factoryPolls = dbData;

			callback(factoryPolls[index]);
		});
	};

	factory.makeVote = function (index, callback) {
		$http.post('/poll/vote', index).success(function () {
			callback();
		});
	};

	factory.deletePoll = function (poll, callback) {
		$http.post('/poll/delete', poll).success(function () {
			callback();
		});
	}

	return factory;
});