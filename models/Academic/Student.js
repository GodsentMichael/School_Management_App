const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const StudentSchema = new mongoose.Schema(
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
		//When generated, this will be the student's ID and they can choose to login with this or their email.
		studentId: {
			type: String,
			required: true,
			default: function () {
				return (
					'STU' +
					Math.floor(100 + Math.random() * 900) +
					Date.now().toString().slice(2, 4) +
					this.name.split(' ').map((name) => name[0].join('').toUppperCase())
				);
			},
		},
		//For when a student is withdrawn from the school.
		isWithdrawn: {
			type: Boolean,
			default: false,
		},
		//For when a student is suspended from the school.
		isSuspended: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			default: 'student',
		},

		//== My Database relationships ===\\

		//To keep track of student level from 1 - 6
		classLevels: [
			{
				type: Schema.Types.ObjectId, //So I'd be able to reference the ClassLevel Model.
				ref: 'ClassLevel',
				required: true,
			},
		],

		currentClassLevel: {
			type: String,
			default: function () {
				return this.classLevels[this.classLevels.length - 1];
			},
		},
		//For all exams a student has taken.
		examResults: [
			{
				type: Schema.Types.ObjectId, //So I'd be able to reference the ExamResult Model.
				ref: 'ExamResult',
			},
		],

		program: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the Program Model.
			ref: 'Program',
			required: true,
		},

		isPromotedToLevel200: {
			type: Boolean,
			default: false,
		},
		isPromotedToLevel300: {
			type: Boolean,
			default: false,
		},
		isPromotedToLevel400: {
			type: Boolean,
			default: false,
		},
		isGraduated: {
			type: Boolean,
			default: false,
		},
		prefectName: {
			type: String,
		},
		yearGraduated: {
			type: String,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Student', StudentSchema);
