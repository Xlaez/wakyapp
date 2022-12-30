import { User } from '../../model/User';
import dbConnect from '../../lib/db';
import { generateToken, hashPassword } from '../../lib/utils';

dbConnect()
	.then((result) => {
		console.info('Mongodb connected....');
	})
	.catch((err) => {
		console.error(err);
	});

const getUserByEmail = async (email) => {
	const user = await User.findOne({ email });
	return user;
};

export default async function handler(req, res) {
	const { body } = req;
	console.log(body);
	try {
		const user = await getUserByEmail(body.email);

		if (user) return res.status(400).send('user already exists.');
		const password = await hashPassword(body.password);

		const newUser = await User.create({ ...body, password });
		if (!newUser) return res.status(500).json({ msg: 'cannot create user' });
		const token = generateToken(newUser._id, 60 * 60 * 2);

		res.status(201).json({ token });
	} catch (error) {
		res.status(500).json(error);
	}
}
