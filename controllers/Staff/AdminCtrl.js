const Admin = require('../../models/Staff/Admin');

//To create admin user.
exports.adminRegister = async (req, res) => {
	const { name, email, password, role } = req.body;

	try {
		//Check if email exists
		const adminExist = await Admin.findOne({ email: email });
		if (adminExist) {
			res.json({
				message: 'Admin user already exists',
			});
		}

		//Create the admin user
		const adminUser = await Admin.create({
			name,
			email,
			password,
			role,
		});
		res.status(201).json({
			message: 'Admin created successfully',
			data: adminUser,
		});
	} catch (error) {
		res.status(401).json({
			message: 'Admin creation failed',
		});
	}
};

exports.adminLogin = (req, res) => {
	try {
		res.status(201).json({
			message: 'Admin logged-in successfully',
			data: 'Admin data here...',
		});
	} catch (error) {
		res.status(401).json({
			message: 'Admin login failed',
		});
	}
};
