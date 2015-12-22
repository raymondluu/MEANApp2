var users = require('../controllers/users.js');
var polls = require('../controllers/polls.js');

module.exports = function (app) {
	app.post('/user/add', function (req, res) {
		users.addUser(req, res);
	});

	app.get('/user/:name', function (req, res) {
		users.findUser(req, res);
	});

	app.post('/polls/add', function (req, res) {
		polls.addPoll(req, res);
	});

	app.get('/polls', function (req, res) {
		polls.getPolls(req, res);
	})

	app.post('/poll/vote', function (req, res) {
		polls.makeVote(req, res);
	});

	app.post('/poll/delete', function (req, res) {
		polls.deletePoll(req, res);
	});
};