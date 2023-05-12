const Admin = require('../models/Staff/Admin');

// To check wether user is an Admin.
const isAdmin = async (req, res, next) => {
	const { userId } = req.userAuth._id;
	const adminUser = await Admin.findById(userId);
	console.log(adminUser);
	if (adminUser?.role === 'admin') {
		next();
	} else {
		res.status(403).json({ message: 'Access Denied, Only Admin' });
		throw new Error("You're not an Admin");
	}
};

module.exports = isAdmin;
