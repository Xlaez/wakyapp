import crypto from 'crypto';

export const randomString = () => crypto.randomBytes(30).toString('hex');
