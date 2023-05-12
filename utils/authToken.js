const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const verifyToken = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
		if (err) {
			// return { message: 'Invalid token' };
            return false
		} else {
			return decoded    
		}
	});
};

module.exports = { generateToken, verifyToken };
