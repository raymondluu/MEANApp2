var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	createdAt: {type: String, default: Date()},
	updatedAt: {type: String, default: Date()}
});

mongoose.model('User', UserSchema);