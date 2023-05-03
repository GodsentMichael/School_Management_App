const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const ExamSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		subject: {
			type: Schema.Types.ObjectId,
			ref: 'Subject',
			required: true,
		},
		program: {
			type: Schema.Types.ObjectId,
			ref: 'Program',
			required: true,
		},
		passMark: {
			type: Number,
			required: true,
			default: 50,
		},
		totalMark: {
			type: Number,
			required: true,
			default: 100,
		},

		academicTerm: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicTerm Model.
			ref: 'AcademicTerm',
			required: true,
		},

		duration: {
			type: String,
			required: true,
			default: '30 minutes', //This is the default duration for an exam
		},
		examDate: {
			type: Date,
			required: true,
		},
		examTime: {
			type: String,
			required: true,
		},
		examType: {
			type: String,
			required: true,
			default: 'Objective', //This is the default exam type
		},
		examStatus: {
			type: String,
			required: true,
			default: 'Pending-approval',
			enum: ['Pending-approval', 'Live'],
		},
		// All  questions for the exam.
		questions: [
			{
				type: Schema.Types.ObjectId, //So I'd be able to reference the Question Model.
				ref: 'Question',
			},
		],

		classLevel: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the ClassLevel Model.
			ref: 'ClassLevel',
			required: true,
		},

		createdBy: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the Teacher Model.
			ref: 'Teacher',
			required: true,
		},

		academicTerm: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicTerm Model.
			ref: 'AcademicTerm',
			required: true,
		},
		academicYear: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicYear Model.
			ref: 'AcademicYear',
			required: true,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Exam', ExamSchema);
