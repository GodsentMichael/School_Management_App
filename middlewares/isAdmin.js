const Admin = require('../models/Staff/Admin');

// To check wether user is an Admin.
const isAdmin = async (req, res, next) => {
	const userId = req.userAuth._id;
	const adminUser = await Admin.findById(userId);
	if (adminUser?.role === 'admin') {
		next();
	} else {
		next(new Error('Access Denied, Only Admin'));
	}
};

module.exports = isAdmin;
