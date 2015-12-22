var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
	user: Object,
	question: String,
	options: Array,
	createdAt: {type: String, default: Date()},
	updatedAt: {type: String, default: Date()}
});

mongoose.model('Poll', PollSchema);