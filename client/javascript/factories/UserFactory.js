myApp.factory('UserFactory', function ($http, $location) {
	var factory = {};
	var factoryUser = {};

	factory.addUser = function (user, callback) {
		$http.post('/user/add', user).success(function (dbData) {
			factoryUser = dbData;

			callback();
		});
	};

	factory.getUserByName = function (user, callback) {
		$http.get('/user/' + user.name).success(function (dbData) {
			factoryUser = dbData;

			callback(dbData);
		});
	};

	factory.getCurrentUser = function () {
		return factoryUser;
	}

	return factory;
});