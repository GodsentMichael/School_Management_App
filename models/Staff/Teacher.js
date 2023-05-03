const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const TeacherSchema = new mongoose.Schema(
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
		dateEmployed: {
			type: Date,
			default: Date.now,
		},
		// To generate a random teacherId for each teacher when they sign up.
		teacherId: {
			type: String,
			required: true,
			default: function () {
				return 'TEA' + Math.floor(Math.random() * 900) + 1;
			},
		},
		//When teacher is withdrawn from the school they won't be able to login.
		isWithdrawn: {
			type: Boolean,
			default: false,
		},
		//When the teacher is suspended from the school, they can login but can't perform any task.
		isSuspended: {
			type: Boolean,
			default: false,
		},
		applicationStatus: {
			type: String,
			default: 'pending',
			enum: ['pending', 'approved', 'rejected'],
		},
		role: {
			type: String,
			default: 'teacher',
		},
		//== My Database relationships ===\\

		//A teacher can teach more than one subjects and a subject can be taught by more than one teacher.
		subjects: [
			{
				type: Schema.Types.ObjectId, //So I'd be able to reference the Subject Model.
				ref: 'Subject',
				required: true,
			},
		],
		//These class levels will be added to the teacher when they are registered.
		classLevels: [
			{
				type: Schema.Types.ObjectId, //So I'd be able to reference the ClassLevel Model.
				ref: 'ClassLevel',
			},
		],
		//These are the department/programs the teacher teaches.
		program: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the Program Model.
			ref: 'Program',
			required: true,
		},
		//This is the academic year the teacher the teacher is to teach.
		academicYear: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicYear Model.
			ref: 'AcademicYear',
			required: true,
		},
        // A teacher can give more than one exam.
		examsCreated: [
			{
				type: Schema.Types.ObjectId, //So I'd be able to reference the Exam Model.
				ref: 'Exam',
			},
		],
		createdBy: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the Admin Model.
			ref: 'Admin',
			required: true,
		},
		//These are the academic term the teacher is employed to teach.
		academicTerm: {
			type: Schema.Types.ObjectId, //So I'd be able to reference the AcademicTerm Model.
			ref: 'AcademicTerm',
			required: true,
		},
	},
	{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Teacher', TeacherSchema);
