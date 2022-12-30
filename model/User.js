import { Schema, models, model } from 'mongoose';

const Usershema = new Schema({
	username: {
		type: String,
		minlength: [2, 'username cannot be less than 2 characters'],
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minlength: [5, 'password must be more than 5 characters'],
	},
	img: {
		type: String,
		default:
			'https://res.cloudinary.com/kamounation/image/upload/v1662771079/cld-sample-5.jpg',
	},
	bio: {
		type: String,
		maxlength: [400, 'cannot be more than 400 words'],
	},
});

module.exports = models.User || model('User', Usershema);
