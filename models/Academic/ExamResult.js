const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ExamResultSchema = new mongoose.Schema({
    student:{
        type:Schema.Types.ObjectId,
        ref: 'Student',
        required:true,
       
    },
    exam:{
        type:Schema.Types.ObjectId,
        ref: 'Exam',
        required:true,
       
    },
    grade:{
        type:Number,
        required:true,
       
    },
    score:{
        type:Number,
        required:true,
    },
    passMark: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['passed', 'failed'],
        default: 'failed',
    },
    remark: {
        type: String,
        required: true,
        enum: ['Excellent', 'Very Good', 'Good', 'Fair', 'Poor'],
        default: 'Poor',
    },
    position: {
        type: Number,
        required: true,
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    classLevel: {
        type: Schema.Types.ObjectId,
        ref: 'ClassLevel',
        required: true,
    },
    academicTerm: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicTerm',
        required: true,
    },
    academicYear: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicYear',
        required: true,
    },
    isPublished: {
        type: Boolean,
        required: true,
        default: false,
    },

}, {timestamps:true});

//Export the model
module.exports = mongoose.model('ExamResult', ExamResultSchema);