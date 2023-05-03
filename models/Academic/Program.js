const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProgramSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	duration: {
		type: String,
		required: true,
		default: '4 years',
	},
	//For the code that will be generated automatically
	// e.g. BSC-001
	code: {
		type: String,
		default: function () {
			// return this.name.substring(0, 3).toUpperCase() + "-" + Math.floor(Math.random() * 1000);
			return (
				this.name
					.split(' ')
					.map((name) => name[0])
					.join('')
					.toUppercase() +
				Math.floor(10 + Math.random() * 90) +
				Math.floor(10 + Math.random() * 90)
			);
		},
	},
    //To reference the person creating the program/department.
    createdBy: {
        type: Schema.Types.ObjectId, //So I'd be able to reference the Admin Model.
        ref: 'Admin',
        required: true,
    },
   //To push the teachers in a program/department when the program/department is created.
    teachers: [{
        type: Schema.Types.ObjectId, //So I'd be able to reference the Teacher Model.
        ref: 'Teacher',
        default: []
    }],
    //To push the students in a program/department when the program/department is created.
    students: [{
        type: Schema.Types.ObjectId, //So I'd be able to reference the Student Model.
        ref: 'Student',
        default: []
    }],
    //To push the subjects in a program/department when the program/department is created.
    subjects: [{
        type: Schema.Types.ObjectId, //So I'd be able to reference the Subject Model.
        ref: 'Subject',
        default: []
    }],
},
{ timestamps: true },
);

const Program = mongoose.model('Program', ProgramSchema);

module.exports = Program;