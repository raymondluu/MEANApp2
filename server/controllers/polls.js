var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = (function () {
	return {
		addPoll: function (req, res) {
			var poll = new Poll(req.body);

			poll.save(function (err, results) {
				if (err) {
					res.json(err);
				}
				else {
					res.json(results);
				}
			});
		},

		getPolls: function (req, res) {
			Poll.find({}, function (err, results) {
				if (err) {
					res.json(err);
				}
				else {
					res.json(results);
				}
			})
		},

		makeVote: function (req, res) {
			Poll.findOne({question: req.body.poll.question}, function (err, result) {
				if (err) {
					console.log(err);
				}
				else {
					var options = result.options;

					for(idx in options) {
						if (options[idx].option == req.body.option.option) {
						options[idx].votes++;
						}
					}

					result.markModified('options');

					result.save(function (err, results) {
						if (err) {
							console.log(err);
						}
						else {
							res.end();
						}
					});
				}
			});
		},

		deletePoll: function (req, res) {
			Poll.remove({_id: req.body._id}, function (err, result) {
				if (err) {
					console.log(err);
				}
				else {
					res.end();
				}
			});
		}
	}
})();