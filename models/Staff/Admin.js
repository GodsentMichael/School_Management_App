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


//==== Admin Model =====\\
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
