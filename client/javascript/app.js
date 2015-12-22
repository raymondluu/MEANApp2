var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.when('/dashboard', {
		templateUrl: 'partials/polls.html',
		controller: 'DashboardController'
	})
	.when('/create', {
		templateUrl: 'partials/createPoll.html',
		controller: 'CreatePollController'
	})
	.when('/poll/:index', {
		templateUrl: 'partials/poll.html',
		controller: 'PollController'
	})
	.otherwise({
		redirectTo: '/'
	});
});