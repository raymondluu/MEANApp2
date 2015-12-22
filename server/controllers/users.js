var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
	return {
		addUser: function (req, res) {
			var user = new User(req.body);


			user.save(function (err, results) {
				if (err) {
					res.json(err);
				}
				else {
					res.json(results);
				}
			});
		},

		findUser: function (req, res) {
			User.findOne(req.params, function (err, results) {
				res.json(results);
			});
		}
	}
})();