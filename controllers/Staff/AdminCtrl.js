const Admin = require('../../models/Staff/Admin');
const AsyncHandler = require('express-async-handler');
const { generateToken, verifyToken } = require('../../utils/authToken');
const bcrypt = require('bcryptjs');
const { verify } = require('jsonwebtoken');

//desc   register admins
//route  POST api/v1/admins/register
//access Private
exports.adminRegister = AsyncHandler(async (req, res) => {
	let { name, email, password, role } = req.body;

	//Check if email exists
	const adminExist = await Admin.findOne({ email: email });
	if (adminExist) {
		throw new Error('Admin already exists');
	}
	// TO HASH PASSWORD.
	//Generate a salt
	const salt = await bcrypt.genSalt(10);
	//Generate a password hash (salt + hash)
	const passwordHashed = await bcrypt.hash(password, salt);
	
	//Create the admin user
	const adminUser = await Admin.create({
		name,
		email,
        //Re-assign hashed version over original, plain text password
		password: passwordHashed,
		role,
	});
	res.status(201).json({
		status: 'Success',
		message: 'Admin created successfully',
		data: adminUser,
	});
});

//desc   login admins
//route  POST api/v1/admins/login
//access Private
exports.adminLogin = AsyncHandler(async (req, res) => {
	const { email, password } = req.body;
	try {
		//Find admin user
		const adminUser = await Admin.findOne({ email: email });
		if (!adminUser) {
			res.json({
				status: 'Failed',
				message: 'Invalid login details',
			});
		}
        console.log("Admin User=>",adminUser);
		//Check if password matches
		const isMatch = await bcrypt.compare(password, adminUser.password);
		if (!isMatch){
            console.log("isMatch =>",isMatch);
            return res.json({
				message: 'Invalid login details, pls check!',
			});
           
        } else {
			const token = generateToken(adminUser?._id);
			if (token) {
				const verify = verifyToken(token);
				console.log('token is verified=>', verify);
			}
			return res.status(201).json({
				message: 'Admin logged-in successfully',
				token: generateToken(adminUser?._id),
			});
		} 
	} catch (error) {
		return res.status(500).json({
			status: 'Failed',
			message: 'Internal server error',
		});
	}
});

  

//desc   get a single admin.
//route  GET api/v1/admins/:id
//access Private
exports.getSingleAdmin = AsyncHandler(async (req, res) => {
	const { id } = req.params;
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

//desc   get an admin's profile.
//route  GET api/v1/admins/
//access Private
exports.getAdminProfile = AsyncHandler(async (req, res) => {
	// since the user is already authenticated/logged in, now esists in the req.userAuth
	console.log(req.userAuth);
	const admin = await Admin.findById(req.userAuth._id).select(
		'-password -createdAt -updatedAt'
	);
	if (!admin) {
		throw new Error('Admin Not Found');
	} else {
		res.status(200).json({ mesage: 'This is the admin', admin });
	}
});

//desc   get all admin's profile.
//route  GET api/v1/admins/
//access Private
exports.getAllAdminProfile = AsyncHandler(async (req, res) => {
	try {
		const admins = await Admin.find();
		if (!admins) {
			throw new Error('Admins Not Found');
		} else {
			res.status(200).json({ mesage: 'Fetched All Admin Profiles', admins });
		}
	} catch (error) {
		res.status(500).json({ mesage: 'Internal Server Error' });
	}
});

//desc   update admins.
//route  PUT api/v1/admins/:id
//access Private

exports.updateAdmin = AsyncHandler(async (req, res) => {
	const { email, password, name } = req.body;
	// Check if admin exists
	const adminUser = await Admin.findOne({ email: email });
	if (adminUser) {
		throw new Error('Admin with this email already exists');
	} else {
		const admin = await Admin.findByIdAndUpdate(
			req.userAuth._id,
			{
				email: email,
				password: password,
				name: name,
			},
			{ new: true, runValidators: true }
		);
		res.status(200).json({ mesage: 'Admin Successfully Updated', admin });
	}
});
