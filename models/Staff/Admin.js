const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		academicTerm: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'AcademicTerm',
			},
		],
		academicYear: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'AcademicYear',
			},
		],
		students: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Student',
			},
		],
		teachers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Teacher',
			},
		],
		classLevels: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'ClassLevel',
			},
		],
	},
	{
		timestamps: true,
	}
);

// Hash password before saving to database.
adminSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next();
	}
	try {
		//Generate a salt
		const salt = await bcrypt.genSalt(10);
		//Generate a password hash (salt + hash)
		const passwordHash = await bcrypt.hash(this.password, salt);
		//Re-assign hashed version over original, plain text password
		this.password = passwordHash;
		next();
	} catch (error) {
		next(error);
	}
});

//Compare password in the database and the one that the user typed in.
adminSchema.methods.isPasswordMatch = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

//==== Admin Model =====\\
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
