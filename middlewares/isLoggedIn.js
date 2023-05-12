const Admin = require('../models/Staff/Admin');
const { verifyToken } = require('../utils/authToken');

const isLoggedIn = async (req, res, next) => {
	//grab the token from auth.headers
	const headerObj = req.headers;
	const token = headerObj?.authorization?.split(" ")[1];
	if(!token){
		res.status(403).json({message: 'User is not logged in'});
		throw new Error('User is not logged in');
	}
	//verify the token
	const verifiedToken = verifyToken(token);
	if (verifiedToken) {
		//find the admin user.
		const user = await Admin.findById(verifiedToken.id).select(
			'name email role'
		);
		//save the user to req.Obj
		req.userAuth = user;
		next();
	} else {
		const err = new Error('Token expired or invalid');
		next(err);
	}
};

module.exports = isLoggedIn;
