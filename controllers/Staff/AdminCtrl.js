const Admin = require('../../models/Staff/Admin');
const AsyncHandler = require('express-async-handler');


//To create admin user.
exports.adminRegister = AsyncHandler(async (req, res) => {
	const { name, email, password, role } = req.body;

	
		//Check if email exists
		const adminExist = await Admin.findOne({ email: email });
		if (adminExist) {
			throw new Error('Admin already exists');
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
	
});

exports.adminLogin = AsyncHandler( async (req, res) => {
    const {email, password } = req.body;
	try {
        //Find admin user
        const adminUser = await Admin.findOne({ email: email });
        if (!adminUser) {
            res.json({
                message: 'Invalid login details',
            });
        }
        //Check if password matches
        const isMatch = await adminUser.isPasswordMatch(password);
        
        if (adminUser && isMatch) {
            //save the admin user to req object
            req.userAuth = adminUser;
            return res.status(201).json({
                message: 'Admin logged-in successfully',
                data: adminUser,
            });
        } else {
            return res.json({
                message: 'Invalid login details',
            });
        }
		
	} catch (error) {
	return res.status(500).json({
        message: 'Internal server error',
    });
	}
})

//To get a single admin user.
exports.getSingleAdmin = AsyncHandler(async (req, res) => {
    const {id} = req.params;
    const admin = await Admin.findById(id);
    if (admin) {
        res.json({
            message: 'Admin user found',
            data: admin,
        });
    } else {
        res.status(404);
        throw new Error('Admin user not found');
    }
});
