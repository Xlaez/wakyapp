import { sign, verify } from 'jsonwebtoken';
import { compareSync, hashSync } from 'bcryptjs';

export const generateToken = (
	userId,
	expires,
	secret = process.env.JWT_SECRET
) => {
	const payload = {
		sub: userId,
		exp: expires.unix(),
	};
	return sign(payload, secret);
};

export const verifyToken = (token) => {
	return (payload = verify(token, process.env.JWT_SECRET));
};

export const hashPassword = async (string) => {
	const hashedPassword = hashSync(string, 10);
	return hashedPassword;
};

/**
 *
 * @param {string} password  is the hashed password stored in database
 * @param {string} string is the password to verify
 * @returns true or null
 */
export const comparePassword = async (password, string) => {
	return compareSync(string, password);
};

export const serverUri =
	process.env.NODE_ENV !== 'development'
		? 'https://waky.vercel.app'
		: 'http://localhost:3000';
